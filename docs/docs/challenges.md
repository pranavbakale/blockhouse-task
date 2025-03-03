**`docs/challenges.md`**

During the development of the Crypto Price Tracker, I encountered several challenges. This section documents these challenges and the solutions I implemented.

## API Rate Limiting

### Challenge
The CoinGecko free API has rate limits (50 calls per minute), which could be easily exceeded if users frequently click the refresh button.

### Solution
1. Implemented debouncing on the refresh button with a 3-second cooldown
2. Added a stale time of 30 seconds in React Query to prevent unnecessary refetches
3. Used React Query's caching to reduce API calls

```javascript
// RefreshButton.jsx with debounce
import { useQueryClient } from 'react-query';
import { useState } from 'react';

const RefreshButton = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const queryClient = useQueryClient();
  
  const handleRefresh = () => {
    if (isDisabled) return;
    
    queryClient.invalidateQueries('cryptoData');
    setIsDisabled(true);
    
    // Debounce for 3 seconds
    setTimeout(() => {
      setIsDisabled(false);
    }, 3000);
  };
  
  return (
    <button
      onClick={handleRefresh}
      disabled={isDisabled}
      className={`bg-blue-500 text-white font-medium py-2 px-4 rounded-lg 
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
    >
      Refresh Prices
    </button>
  );
};