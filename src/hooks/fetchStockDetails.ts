"use client";
import {
  searchAPI,
  searchSingleStockAPI,
  stockTickerAPI,
} from "@/constants";
import { fetchCurrentStockData } from "@/lib/utils";
import { useEffect, useState } from "react";

const useFetchStock = (name: string, time:string, type:string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const stockData = await fetchCurrentStockData(name, time, type)
        setData(stockData);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message); // or whatever structure you need
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, [name]);

  return { data, setData, error, loading };
};

const useStockSearch = (name: string, specificStock = undefined) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const url = specificStock
          ? searchSingleStockAPI(name)
          : searchAPI(name);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const stockData = await response.json();

        setData(specificStock ? stockData[0] : stockData);
  
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, [name]);

  return { data, setData, error, loading };
};

const useStockTicker = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const url = stockTickerAPI;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const stockData = await response.json();
        console.log("success", stockData);
        setData(stockData);
  
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  return { data, error, setData, loading };
};

export { useFetchStock, useStockSearch, useStockTicker };
