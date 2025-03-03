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