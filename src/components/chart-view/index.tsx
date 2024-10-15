"use client"
import React, { useEffect, useMemo, useState } from 'react'

type Props = {
  data: any,
  loading: boolean,
  stock: string,
  handleStockDataChange: any
}
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { timeFrames } from '@/constants'
import { Loader } from '../loader'
import { fetchCurrentStockData } from '@/lib/utils'
export const description = "A linear area chart"

const chartConfig = {
  high: {
    label: "high",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const ChartView = ({ data, loading, stock, handleStockDataChange }: Props) => {
  let highValues = [];
  let minY, maxY;
  const [stockData, setStockData] = useState([]);
  const [timeSelected, setTimeSelected] = useState(timeFrames[0]);

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      console.log("datadata", data);
      highValues = data?.map((item: { high: string }) => parseFloat(item.high));
      minY = Math.min(...highValues) * 0.95; // 5% below min value
      maxY = Math.max(...highValues) * 1.05; // 5% above max value
      const reversedArr = [...data].reverse();
      setStockData(reversedArr)
    }
  }, [data])

  useEffect(() => {
    const fetchUpdatedData = async () => {
      const data = await fetchCurrentStockData(stock, timeSelected.value, timeSelected.type);
      handleStockDataChange(data);
      console.log("received", data);
    }

    fetchUpdatedData();

  }, [timeSelected])

  const maxValue = useMemo(() => {
    let maxHigh = -Infinity;
    let maxChange = -Infinity;
    let maxPercent = -Infinity;
    stockData?.forEach((stock) => {
      maxHigh = Math.max(stock.high, maxHigh);
      maxChange = Math.max(stock.change, maxChange)
      maxPercent = Math.max(stock.percent, maxPercent)
    })

    return { maxHigh, maxChange, maxPercent };
  }, [data, timeSelected]);

  const handleTimeChange = (time) => {
    setTimeSelected(time);
    localStorage.setItem("time", time.id);
  }

  return (
    <Loader loading={loading}>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className='flex font-normal justify-start gap-2 items-center'>
              <span className='text-lg'>{`₹ ${maxValue?.maxHigh}`}</span>
              <span className='text-[15px] text-green-600'>{`${maxValue?.maxChange}(${maxValue?.maxPercent})% 1D`}</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={data}
            >
              <defs>
                <linearGradient id="gradientColor" x1="10%" y1="10%" x2="10%" y2="100%">
                  <stop offset="30%" style={{ stopColor: '#00ff2f', stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0.2 }} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="high"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value}
              />
              <YAxis domain={[minY, maxY]} />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" hideLabel />}
              />
              <Area
                dataKey="high"
                type="linear"
                fill="url(#gradientColor)"
                fillOpacity={0.4}
                stroke="green"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex text-sm justify-between cursor-pointer">
            {timeFrames.map((time) => (
              <div onClick={() => handleTimeChange(time)} key={time.id}>
                <span className={`${timeSelected && "bg-blue"} px-2 py-2`}>{time.label}</span>
              </div>
            ))}
            {/* <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                January - June 2024
              </div> */}
          </div>
        </CardFooter>
      </Card>
    </Loader>
  )
}

export default ChartView