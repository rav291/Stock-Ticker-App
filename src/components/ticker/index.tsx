"use client"
import React, { useEffect, useRef, useState } from 'react'

type Props = {}
const items = [
  "Item 1: Apple",
  "Item 2: Banana",
  "Item 3: Cherry",
  "Item 4: Date",
  "Item 5: Fig",
  "Item 6: Grape",
];
const Ticker = (props: Props) => {
  const tickerRef = useRef(null);
  const [scrollSpeed] = useState(1); // Adjust speed as needed
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!paused && tickerRef.current) {
        tickerRef.current.scrollLeft += scrollSpeed;
      }
    };

    const interval = setInterval(handleScroll, 30); // Adjust interval for smoother scrolling
    return () => clearInterval(interval);
  }, [scrollSpeed, paused]);

  return (
    <div
      className="overflow-hidden whitespace-nowrap"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={tickerRef}
        className="flex items-center space-x-8"
        style={{ display: 'inline-block' }}
      >
        {items.map((item, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ticker