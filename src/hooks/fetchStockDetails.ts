"use client";
import { searchAPI, stockDetailsAPI, stockTickerAPI } from "@/constants";
import { SetStateAction, useEffect, useState } from "react";

const useFetchStock = (name: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const url = stockDetailsAPI(name);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const stockData = await response.json();
        console.log("success", stockData[0]);
        setData(stockData[0]);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, [name]);

  return { data, error, loading };
};

const useStockSearch = (name: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const url = searchAPI(name);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const stockData = await response.json();
        console.log("success", stockData[0]);
        setData(stockData);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, [name]);

  return { data, error, loading };
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

  return { data, error, loading };
};

export { useFetchStock, useStockSearch, useStockTicker };
