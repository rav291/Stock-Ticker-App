"use client"
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import ChartView from '@/components/chart-view'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Expand, Heart } from 'lucide-react'
import { companyInfo, description, growthMetrics } from '@/constants'
import { useParams, useRouter } from 'next/navigation'
import { useFetchStock, useStockSearch } from '@/hooks/fetchStockDetails'
import { useTheme } from 'next-themes'
import { toast } from '@/hooks/use-toast'

type Props = {}

const StockDetails = (props: Props) => {
  const { symbol: stock } = useParams();
  const [stockData, setStockData] = useState([]);
  const { data, loading, error } = useFetchStock(stock);
  const { data: currentStock, loading: stockLoader, error: stockError } = useStockSearch(stock, true);
  const keywords = `${stock}, stock market, investing, finance`;
  const { theme = "system" } = useTheme();

  useEffect(() => {
    setStockData(data)
    console.log("selectedstock", data);
  }, [data])

  console.log("currentStock", currentStock)

  return (
    <div className={`flex flex-col gap-4 mt-4 px-24 max-xl:px-2`}>
      <Head>
        <title>${stock}</title>
        <meta name="description" content={`Details about ${stock}`} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
      </Head>
      <section className='breadcrumb'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Stock Details</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
      <main className={`flex max-lg:flex-col gap-8 max-sm:gap-2`}>
        <aside className='max-lg:w-full rounded-xl px-2'>
          <div className='flex items-center justify-between mb-4'>
            <h1 className='font-extrabold'>{currentStock?.company}</h1>
            <Heart className={``} onClick={() => {
              toast({
                title: "Stock Saved Successfully!",
                description: "You can view it in your favorites list",
                variant: "destructive",
              });
            }} />
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-sm'>{currentStock?.symbol}</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className='border-none mb-1'>
                  <Expand />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <ChartView key={stock} data={data} />
              </DialogContent>
            </Dialog>
          </div>
          <ChartView key={stock} data={data} loading={loading} />
        </aside>
        <article className={`${theme == "light" ? "text-black bg-white" : "text-white bg-black"} w-3/4 max-lg:w-full rounded-xl p-4`}>
          <h1 className='font-bold mb-4'>Company Info</h1>
          <div className='flex max-lg:flex-col justify-between gap-4'>
            <div className='border-2 rounded-xl border-stone-200 shadow-lg w-1/2 max-lg:w-full px-6 py-4'>{description}</div>
            <div className='border-2 rounded-xl border-stone-200 shadow-lg w-1/2 max-lg:w-full'>
              {companyInfo.map((info, index) => (
                <div className='flex items-center justify-between px-6 py-3'>
                  <p className='font-semibold'>{info.field}</p>
                  <p className='font-medium'>{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </main>
      <article>
        <h1 className='font-bold mb-4 text-lg px-4'>Key Metrics</h1>
        <div className={`${theme == "light" ? "text-black bg-stone-200" : "text-white bg-black"} flex flex-wrap items-center sm:justify-start justify-center gap-4 rounded-xl mb-8`}>
          {growthMetrics.map((metric, index) => (
            <div className='flex max-sm:flex-col w-1/3 items-center justify-between px-6 py-3'>
              <p className='font-semibold'>{metric.name}</p>
              <p className='text-sm'>{metric.returns}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}

export default StockDetails