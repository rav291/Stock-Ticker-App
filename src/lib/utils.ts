import { stockDetailsAPI } from "@/constants";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const fetchCurrentStockData = async (name, time, type) => {
  const url = stockDetailsAPI(name, time, type);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const stockData = await response.json();
  console.log("success", stockData);

  return stockData;
}

export {fetchCurrentStockData};