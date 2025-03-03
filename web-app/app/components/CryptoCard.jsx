import React from 'react';
import Image from 'next/image';
import { formatCurrency, formatPercentage } from '../utils/formatters';

const CryptoCard = ({ crypto }) => {
    const priceChange = crypto.price_change_percentage_24h;
    const isPriceUp = priceChange > 0;
    
    return (
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
            <div className="w-10 h-10 mr-2 relative">
            <Image 
                src={crypto.image} 
                alt={crypto.name} 
                width={40} 
                height={40}
                className="rounded-full"
            />
            </div>
            <div>
            <h3 className="font-bold">{crypto.name}</h3>
            <p className="text-gray-500 uppercase">{crypto.symbol}</p>
            </div>
        </div>
        
        <div className="mt-2">
            <p className="text-xl font-bold">{formatCurrency(crypto.current_price)}</p>
            <p className={`${isPriceUp ? 'text-green-500' : 'text-red-500'}`}>
            {isPriceUp ? '↑' : '↓'} {Math.abs(priceChange).toFixed(2)}%
            </p>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
            <p>Market Cap: {formatCurrency(crypto.market_cap)}</p>
            <p>24h Volume: {formatCurrency(crypto.total_volume)}</p>
        </div>
        </div>
    );
};

export default CryptoCard;