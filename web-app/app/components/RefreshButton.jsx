'use client';

import React, { useState } from 'react';
import { useQueryClient } from 'react-query';

const RefreshButton = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const queryClient = useQueryClient();
    
    const handleRefresh = () => {
        if (isDisabled) return;
        
        queryClient.invalidateQueries('cryptoData');
        setIsDisabled(true);
        
        // Debounce for 3 seconds to prevent API rate limiting
        setTimeout(() => {
        setIsDisabled(false);
        }, 3000);
    };
    
    return (
        <button
        onClick={handleRefresh}
        disabled={isDisabled}
        className={`bg-blue-500 text-white font-medium py-2 px-4 rounded-lg flex items-center
            ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
        >
        <svg
            className="w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
        </svg>
        Refresh Prices
        </button>
    );
};

export default RefreshButton;