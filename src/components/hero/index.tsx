"use client"
import React, { useEffect, useState } from 'react'
import Search from '../search'
import { stockItems } from '@/constants'
import { Button } from '../ui/button'
import { useStockSearch, useStockTicker } from '@/hooks/fetchStockDetails'

type Props = {}

const texts = ["Trader!", "Analyst!", "Investor!"];
const HeroSection = (props: Props) => {
  // const { data, error, loading } = useStockTicker();
  const [currentText, setCurrentText] = useState(texts[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setCurrentText(texts[(index + 1) % texts.length]);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  const [query, setQuery] = useState('');
  const { data, error, loading } = useStockSearch(query);
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    if (data) {
      console.log("stocksdata", data)
      setStocks(data);
    }
  }, [data])

  const handleChange = (value: string) => {
    setQuery(value);
  };

  return (
    <div className='flex flex-col justify-center text-center mt-24'>
      <h2 className='font-extrabold text-5xl'>Become a Better
        <span className='text-blue-400'> {currentText}</span>
      </h2>
      <p className='text-lg font-medium mt-4 mb-6'>Best Stock Analysis and Fundamental Analysis Platform</p>
      <Search placeholder="Search your favorite stocks..." zIndex='10' loading={loading} stocks={stocks} query={query} handleChange={handleChange} width='500px' className="py-4 px-6 mx-auto w-[800px]" />
      <div className="trending-stocks flex justify-center gap-6 mt-8 ">
        {stockItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <Button className="rounded-full px-8 py-2 font-semibold">{item.name}</Button>
          </div>
        ))}
      </div>
      <div className='flex gap-6'>
        <article className='top-gainers'>

        </article>
        <article className='top-losers'>

        </article>
      </div>
    </div>
  )
}

export default HeroSection