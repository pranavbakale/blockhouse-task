import { create } from 'zustand';

const useCryptoStore = create((set) => ({
    searchTerm: '',
    setSearchTerm: (term) => set({ searchTerm: term }),
    
    isLoading: false,
    setLoading: (status) => set({ isLoading: status }),
}));

export default useCryptoStore;