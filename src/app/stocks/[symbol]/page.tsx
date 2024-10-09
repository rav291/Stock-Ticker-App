import Head from 'next/head'
import React from 'react'
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
import { Expand } from 'lucide-react'
import { companyInfo, description, growthMetrics } from '@/constants'


type Props = {}

const StockDetails = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 mt-4 px-24'>
      <section className=''>
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
      <main className='flex gap-8'>
        <aside className='w-1/4 bg-slate-200 rounded-xl p-2'>
          <h1 className='font-extrabold'>Reliance Industries</h1>
          <div className='flex justify-between items-center'>
            <p className='text-sm'>RELIANCE</p>
            <span className='text-[14px] px-4 py-2 rounded-full'>Large Cap</span>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Expand />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[800px]">
                <ChartView />
              </DialogContent>
            </Dialog>
          </div>
          <ChartView />
        </aside>
        <article className='w-3/4 bg-stone-100 rounded-xl p-4'>
          <h1 className='font-bold mb-4'>Company Info</h1>
          <div className='flex justify-between gap-4'>
            <div className='border-2 rounded-xl border-stone-200 shadow-lg w-1/2 px-6 py-4'>{description}</div>
            <div className='border-2 rounded-xl border-stone-200 shadow-lg w-1/2'>
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
        <h1 className='font-bold mb-4'>Key Metrics</h1>
        <div className='flex gap-4 rounded-xl mb-8'>
          {growthMetrics.map((metric, index) => (
            <div className='flex w-1/3 bg-zinc-100 items-center justify-between px-6 py-3'>
              <p className='font-semibold'>{metric.name}</p>
              <p className='font-medium'>{metric.returns}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}

export default StockDetails