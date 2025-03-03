**`docs/api-integration.md`**

The Crypto Price Tracker integrates with the CoinGecko API to fetch cryptocurrency data.

### CoinGecko API

I used the [CoinGecko API](https://www.coingecko.com/en/api/documentation) to fetch cryptocurrency data. The API is free to use and does not require authentication for basic usage.

### Endpoints Used

- `/coins/markets` - It is used to fetch a list of cryptocurrencies with market data

### API Integration Implementation

### Custom React Query Hook

I used React Query to fetch and manage API data. The core of the implementation is the `useCryptoData` hook:

```javascript
// web-app/app/hooks/useCryptoData.js
import { useQuery } from 'react-query';
import axios from 'axios';

export const useCryptoData = (searchTerm = '') => {
  return useQuery(
    ['cryptoData', searchTerm],
    async () => {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets',
        {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 100,
            page: 1,
            sparkline: false,
          },
        }
      );
      
      // Filter by search term if provided
      const data = response.data;
      if (searchTerm) {
        return data.filter((crypto) => 
          crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      return data;
    },
    {
      refetchInterval: 60000, // Auto refresh every minute
      staleTime: 30000, // Consider data stale after 30 seconds
    }
  );
};