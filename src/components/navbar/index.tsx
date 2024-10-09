import { actions, services } from '@/constants'
import { Sun } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Search from '../search'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex flex-col justify-between items-center bg-[#292E3F]'>
      <div className='flex justify-between items-center w-full gap-6 px-20 py-4 text-white'>
        <div className="logo text-white">
          <span className='text-sm font-bold'>Trade Brains</span>
          <h1>PORTAL</h1>
        </div>
        <Search placeholder="Search Stocks..." className='py-2 px-4 mr-12 text-black w-[200px]' />
        {services.map((service, index) => {
          return (
            <div key={index} className='font-semibold'>
              {service.name}
            </div>
          )
        })}
        <Sun />
        <Button className='px-6 py-4 bg-gradient-to-r from-blue-400 to-blue-700'>Login</Button>
      </div>
      <div className='h-[1px] w-full bg-white'></div>
      <div className='flex justify-between w-full px-24 py-3 font-medium text-white'>
        {actions.map((action, index) => {
          return (
            <div key={index}>
              {action.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar