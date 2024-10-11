"use client"
import React, { useEffect, useState } from 'react'
import Search from '../search'
import { stockItems } from '@/constants'
import { Button } from '../ui/button'
import { useStockSearch } from '@/hooks/fetchStockDetails'
import { useRouter } from 'next/navigation'

const texts = ["Trader!", "Analyst!", "Investor!"];
const HeroSection = () => {
  const [currentText, setCurrentText] = useState(texts[0]);
  const [index, setIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setCurrentText(texts[(index + 1) % texts.length]);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  const [query, setQuery] = useState('');
  const { data, loading } = useStockSearch(query);
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
    <div className='flex flex-col justify-center text-center mt-24 max-sm:mt-12'>
      <h2 className='font-extrabold text-5xl'>Become a Better
        <span className='text-blue-400'> {currentText}</span>
      </h2>
      <p className='text-lg font-medium mt-4 mb-6'>Best Stock Analysis and Fundamental Analysis Platform</p>
      <Search placeholder="Search your favorite stocks..." zIndex='10' loading={loading} stocks={stocks} query={query} handleChange={handleChange} width='large' className="py-4 px-6 mx-auto" />
      <div className="trending-stocks flex flex-wrap justify-center gap-6 mt-8 ">
        {stockItems.map((item, index) => (
          <div key={index} className="">
            <Button onClick={() => router.push(`stocks/${item.symbol}`)} className="rounded-full max-sm:w-[150px] max-sm:text-xs px-8 py-2 font-semibold">{item.name}</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroSection