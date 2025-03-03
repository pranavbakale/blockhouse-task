// Format currency with comma separators and 2 decimal places
export const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        }).format(value);
    };
    
    // Format percentage with sign and 2 decimal places
    export const formatPercentage = (value) => {
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(2)}%`;
};