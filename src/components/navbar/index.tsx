"use client"
import { actions, services } from '@/constants'
import { Router, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Search from '../search'
import { useTheme } from 'next-themes'
import { useStockSearch } from '@/hooks/fetchStockDetails'
import { useRouter } from 'next/navigation'

type Props = {}

const Navbar = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const [query, setQuery] = useState('');
  const { data, error, loading } = useStockSearch(query);
  const [stocks, setStocks] = useState([]);
  const router = useRouter()

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
    <div className='flex flex-col justify-between items-center'>
      <div className='flex justify-between items-center w-full gap-2  px-20 py-4'>
        <div className="logo cursor-pointer" onClick={() => router.push("/")}>
          <span className='text-sm font-bold '>Trade Brains</span>
          <h1>PORTAL</h1>
        </div>

        <Search placeholder="Search Stocks..." stocks={stocks} zIndex='999' query={query} loading={loading} handleChange={handleChange} width='250px' className='py-2 px-4 text-black w-[500px]' />
        {services.map((service, index) => {
          return (
            <div key={index} className='font-semibold hover:text-blue-400 hover:underline cursor-pointer'>
              {service.name}
            </div>
          )
        })}
        <Sun onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
        <Button className='px-6 py-4 bg-gradient-to-r from-blue-400 to-blue-700'>Login</Button>
      </div>
      <div className={`h-[1px] w-full bg-black`}></div>
      <div className='flex justify-between w-full px-24 py-2 font-medium border-b-2 shadow-lg'>
        {actions.map((action, index) => {
          return (
            <div key={index} className={` ${theme == "dark" ? "hover:bg-blue-500 text-white" : "text-black hover:bg-blue-200"} px-4 py-3 rounded-xl cursor-pointer`}>
              {action.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar