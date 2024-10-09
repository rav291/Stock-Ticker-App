import React from 'react'
import Search from '../search'
import { stockItems } from '@/constants'
import { Button } from '../ui/button'
import useFetchStock from '@/hooks/fetchStockDetails'

type Props = {}

const HeroSection = (props: Props) => {
  const { data, error, loading } = useFetchStock("RELIANCE");
  console.log("abc", data);
  return (
    <div className='flex flex-col justify-center text-center mt-24'>
      <h2 className='font-extrabold text-5xl'>Become a Better Trader</h2>
      <p className='text-lg font-semibold mb-6'>Best Stock Analysis and Fundamental Analysis Platform</p>
      <Search placeholder="Search your favourite stocks..." className="py-4 px-6 mx-auto w-[800px]" />
      <div className="trending-stocks flex justify-center gap-6 mt-8 ">
        {stockItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <Button className="rounded-full px-8 py-2 font-semibold">{item.name}</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroSection