import './globals.css';

export const metadata = {
    title: 'Crypto Price Tracker',
    description: 'Track live cryptocurrency prices',
    };

    export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="bg-gray-50 min-h-screen">
            {children}
        </body>
        </html>
    );
}