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
import { Loader } from '../loader'


type Props = {
  placeholder: string,
  className: string,
  width: string,
  stocks: Array,
  query: string,
  handleChange: Function,
  zIndex: string,
  loading: boolean
}

const Search = ({ className, width, stocks, query, loading, handleChange, zIndex, ...props }: Props) => {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  return (
    <div>
      <div className={`mx-auto ${width === "small" ? "max-sm:w-[160px] w-[200px]" : "max-sm:w-[300px] w-[600px]"} z-${zIndex}`}>
        <Input
          className={`rounded-full border shadow-lg border-slate-200 h-full bg-slate-100 ${className}`} {...props}
          value={query}
          onChange={(e) => {
            handleChange(e.target.value)
            setOpen(true)
            if (!e.target.value) setOpen(false);
          }
          }
        />
        {open && (
          !stocks || stocks.length === 0 ? (
            <div className={`${width === "small" ? "max-sm:w-[160px] w-[200px] h-[50px] text-sm" : "max-sm:w-[300px] w-[600px] h-[100px]"}    flex items-center justify-center absolute w-1/3 mt-2 rounded-xl border shadow-lg border-slate-200 bg-slate-100`}>
              No results found.
            </div>
          ) : (
            <div
              className={`h-[300px] overflow-scroll absolute ${width === "small" ? "max-sm:w-[160px] w-[200px]" : "max-sm:w-[300px] w-[600px]"} mt-2 rounded-xl border shadow-lg border-slate-200 bg-slate-100`}>
              {stocks.map((stock: Object, index: number) => (
                <Loader loading={loading}>
                  <div onClick={() => {
                    router.push(`/stocks/${stock?.symbol}`)
                    setOpen(false);
                    handleChange("");
                  }} className={`flex justify-between text-[12px] cursor-pointer ${index !== stocks.length - 1 ? "border-b-2" : ""} rounded-xl hover:bg-stone-300 ease-in-out delay-75 px-4 py-2 w-full`}>
                    <div className='flex flex-col items-start'>
                      <span>{stock.company}</span>
                      <span className='text-blue-500'>{stock?.symbol}</span>
                    </div>
                    <div>Stock</div>
                  </div>
                </Loader>
              ))}
            </div>
          )
        )}

      </div>
    </div>
  )
}

export default Search