'use client';

import React from 'react';
import useCryptoStore from '../store/cryptoStore';

const SearchBar = () => {
    const searchTerm = useCryptoStore((state) => state.searchTerm);
    const setSearchTerm = useCryptoStore((state) => state.setSearchTerm);
    
    return (
        <div className="relative mb-6">
        <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search cryptocurrencies..."
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <svg
            className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
            />
        </svg>
        </div>
    );
};

export default SearchBar;