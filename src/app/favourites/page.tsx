"use client"
import useLocalStorage from '@/hooks/useLocalStorage'
import React, { useEffect, useState } from 'react'

const Favourites = () => {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [savedStocks, setSavedStocks] = useState([]);
  const { favorites } = useLocalStorage();

  useEffect(() => {
    setSavedStocks(favorites);
  }, [favorites]);

  return (
    <div className='flex flex-col gap-4 mt-4 px-24 max-xl:px-2'>
      <header className='text-xl font-semibold'>Your Favourite Stocks</header>
      <section className='flex flex-wrap gap-4 items-start justify-center'>
        {favorites?.map((stock) => (
          // @ts-ignore
          <div key={stock?.id} className='flex bg-stone-200 p-3 rounded-xl gap-2 justify-between'>
            {/* @ts-ignore */}
            <h1>{stock?.company}</h1>
            {/* @ts-ignore */}
            <h1>{stock?.symbol}</h1>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Favourites