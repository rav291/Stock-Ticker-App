"use client"
import { actions, services } from '@/constants'
import { Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Search from '../search'
import { useTheme } from 'next-themes'
import { useStockSearch } from '@/hooks/fetchStockDetails'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [query, setQuery] = useState('');
  const { data, loading } = useStockSearch(query);
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
      <div className='flex justify-between items-center w-full gap-2 max-md:px-2 max-lg:px-8 lg:px-20 py-4'>
        <div className="flex max-xl:gap-16 max-md:gap-2 xl:gap-4 items-center cursor-pointer" >
          <Image src={`${theme == "dark" ? "/images/PortalLogo_dark.png" : "/images/PortalLogo_light.png"}`} alt="logo" onClick={() => router.push("/")} width={150} height={150} className='max-sm:w-[100px]' />
          <Search placeholder="Search Stocks..." stocks={stocks} zIndex='999' query={query} loading={loading} handleChange={handleChange} width='small' className='max-sm:px-2 py-2 px-4' />
        </div>


        {services.map((service, index) => {
          return (
            <div key={index} className='font-semibold max-xl:hidden hover:text-blue-400 hover:underline cursor-pointer'>
              {service.name}
            </div>
          )
        })}
        <div className='flex gap-4 items-center'>
          <Sun onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
          <Button className='max-sm:px-2 px-6 py-4 bg-gradient-to-r from-blue-400 to-blue-700'>Login</Button>

        </div>
      </div>
      <div className={`h-[1px] w-full bg-black`}></div>
      <div className='flex max-xl:hidden justify-between w-full px-24 py-2 font-medium border-b-2 shadow-lg'>
        {actions.map((action, index) => {
          return (
            <div onClick={() => {
              if (action.name == "Favourite Stocks") {
                router.push("/favourites")
              }
            }} key={index} className={`${action.name == "Favourite Stocks" && "cursor-pointer bg-stone-400"} ${theme == "dark" ? "text-white" : "text-black"} px-4 py-3 rounded-xl`}>
              {action.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar