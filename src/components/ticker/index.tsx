"use client"
import React from 'react';

const MovingTicker = () => {
  // Sample stock data
  const stocks = [
    { name: 'Apple Inc.', symbol: 'AAPL', price: '150.00' },
    { name: 'Microsoft Corp.', symbol: 'MSFT', price: '250.00' },
    { name: 'Google LLC', symbol: 'GOOGL', price: '2800.00' },
    { name: 'Amazon.com Inc.', symbol: 'AMZN', price: '3300.00' },
    { name: 'Tesla Inc.', symbol: 'TSLA', price: '700.00' },
    { name: 'Tesla Inc.', symbol: 'TSLA', price: '700.00' },
    { name: 'Tesla Inc.', symbol: 'TSLA', price: '700.00' },
    { name: 'Tesla Inc.', symbol: 'TSLA', price: '700.00' },
    { name: 'Tesla Inc.', symbol: 'TSLA', price: '700.00' },
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-100 p-2 shadow-md">
      <div className="inline-block animate-ticker">
        {stocks.map((stock) => (
          <div key={stock.symbol} className="inline-block mr-10">
            {stock.name} ({stock.symbol}): ${stock.price}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingTicker;
