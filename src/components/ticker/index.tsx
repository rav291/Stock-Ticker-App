// @ts-nocheck
"use client"
import { useStockTicker } from '@/hooks/fetchStockDetails';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const MovingTicker = () => {
  const [stocks, setStocks] = useState([]);
  const { data } = useStockTicker();
  const { theme } = useTheme();

  useEffect(() => {
    if (data) {
      const updatedStocks = [];
      data["gainers"].forEach((stock) => {
        updatedStocks.push({
          symbol: stock.symbol,
          high: stock.high,
          change: stock.change,
          percent: stock.percent,
        })
      })
      data["losers"].forEach((stock) => {
        updatedStocks.push({
          symbol: stock.symbol,
          high: stock.high,
          low: stock.low,
          open: stock.open,
          change: stock.change,
          percent: stock.percent,
        })
      })

      setStocks([...updatedStocks]);
    }
  }, [data]);

  return (
    <div className={`relative overflow-hidden ${theme == "dark" ? "bg-black border-b shadow-lg border-stone-100" : "bg-stone-200 border-b-2 shadow-lg"}  py-2 [--offset:20vw] [--move-initial:calc(-25%_+_var(--offset))] [--move-final:calc(-50%_+_var(--offset))] group`}>
      <div className="w-fit flex relative transform-[translate3d(var(--move-initial),0,0)] animate-marquee [animation-play-state:running] group-hover:[animation-play-state:paused]" aria-hidden="true">
        {stocks?.map((stock) => (
          <div key={stock?.symbol} className="flex gap-1 mr-10">
            <span className='font-semibold'>{stock?.symbol}&nbsp;</span>
            <span className='font-semibold'>₹{stock?.high}&nbsp;</span>
            <span className={`${stock?.low < stock?.open ? "text-red-500" : "text-green-500"} font-semibold`}>{stock?.change.toFixed(2)}&nbsp;({stock?.percent.toFixed(2)}%)</span>
          </div>
        ))}
      </div>
    </div >
  );
};

export default MovingTicker;
