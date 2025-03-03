'use client';

import React from 'react';
import { useCryptoData } from '../hooks/useCryptoData';
import useCryptoStore from '../store/cryptoStore';
import CryptoCard from './CryptoCard';
import LoadingIndicator from './LoadingIndicator';

const CryptoList = () => {
    const searchTerm = useCryptoStore((state) => state.searchTerm);
    const { data, isLoading, error } = useCryptoData(searchTerm);
    
    if (isLoading) return <LoadingIndicator />;
    
    if (error) return <div className="text-red-500 text-center my-8">Error loading data: {error.message}</div>;
    
    if (!data || data.length === 0) {
        return <div className="text-center my-8">No cryptocurrencies found</div>;
    }
    
    // Display top 5 or filtered results
    const displayData = data.slice(0, 5);
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayData.map((crypto) => (
            <CryptoCard key={crypto.id} crypto={crypto} />
        ))}
        </div>
    );
};

export default CryptoList;