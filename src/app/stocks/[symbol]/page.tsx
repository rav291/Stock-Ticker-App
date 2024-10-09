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
          <div className='flex items-center'>
            <p className='text-sm'>RELIANCE</p>
            <span className='text-[14px] px-4 py-2 rounded-full'>Large Cap</span>
          </div>
          <ChartView />
        </aside>
        <article className='w-3/4 bg-stone-200 rounded-xl'>

        </article>
      </main>
    </div>
  )
}

export default StockDetails