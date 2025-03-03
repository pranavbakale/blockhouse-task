'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import CryptoList from './components/CryptoList';
import SearchBar from './components/SearchBar';
import RefreshButton from './components/RefreshButton';

// Create a client
const queryClient = new QueryClient();

export default function Home() {
    return (
        <QueryClientProvider client={queryClient}>
        <main className="container mx-auto px-4 py-8 max-w-6xl">
            <h1 className="text-3xl font-bold mb-6 text-center">Crypto Price Tracker</h1>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <div className="w-full md:max-w-md">
                <SearchBar />
            </div>
            <div>
                <RefreshButton />
            </div>
            </div>
            
            <CryptoList />
        </main>
        </QueryClientProvider>
    );
}