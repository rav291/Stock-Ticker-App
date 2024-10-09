"use client"
import React, { useState } from 'react'
import { Input } from '../ui/input'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { useStockSearch } from '@/hooks/fetchStockDetails'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


type Props = {
  placeholder: string,
  className: string,
  width: string,
  stocks: Array,
  query: string,
  handleChange: Function,
  loading: boolean,
  zIndex: string
}

const Search = ({ className, width, stocks, query, loading, handleChange, zIndex, ...props }: Props) => {
  const [open, setOpen] = React.useState(false)
  const handleInputBlur = () => setOpen(false);
  const handleInputFocus = () => setOpen(true);
  console.log("mstocks", stocks);

  const router = useRouter()

  return (
    <div>
      <Command className={`w-[${width}] mx-auto z-${zIndex}`}>
        <CommandInput
          className={`rounded-full border shadow-lg border-slate-200 h-full bg-slate-100 ${className}`} {...props}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={query}
          onValueChange={(value) => handleChange(value)}
        />
        {open && (
          <CommandList className='ml-8 absolute w-1/3 mt-12 rounded-xl border shadow-lg border-slate-200 bg-slate-100'>
            <CommandEmpty>No results found.</CommandEmpty>
            {stocks?.length > 0 && stocks?.map((stock: Object, index: number) => (
              <div onClick={() => router.push(`/stocks/${stock?.symbol}`)}>
                <CommandItem key={index}>
                  <div className={`flex justify-between ${index != stocks.length - 1 ? "border-b-2" : ""} rounded-xl hover:bg-stone-300 px-4 py-2 w-full`}>
                    <a className='flex flex-col items-start'>
                      <span >
                        {stock?.company}
                      </span>
                      <span className='text-blue-500'>
                        {stock?.symbol}
                      </span>
                    </a>
                    <div>
                      Stock
                    </div>
                  </div>
                </CommandItem>
              </div>
            ))}
          </CommandList>
        )}
      </Command>
    </div>
  )
}

export default Search