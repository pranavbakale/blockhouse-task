**`docs/state-management.md`**

The Crypto Price Tracker uses a combination of **React Query** for server state and **Zustand** for client state. This section explains my approach to state management.

## State Management Requirements

The application required:

1. Managing API data with caching and refetching
2. Handling user input (search term)
3. Managing UI states (loading, errors)
4. Supporting manual data refresh

## Why React Query + Zustand?

### React Query for Server State

I chose React Query for managing server state because:

- **Automatic caching**: React Query handles caching of API responses
- **Background refetching**: Easy to implement automatic data refreshing
- **Loading and error states**: Built-in loading and error states
- **Invalidation**: Simple API for invalidating cached data (for our refresh button)

Example implementation:

```javascript
const { data, isLoading, error, refetch } = useQuery(
  ['cryptoData', searchTerm],
  fetchCryptoData,
  {
    refetchInterval: 60000, // Auto refresh every minute
    staleTime: 30000,      // Consider data stale after 30 seconds
  }
);