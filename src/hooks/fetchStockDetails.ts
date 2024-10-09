"use client";
import { stockDetailsAPI } from "@/constants";
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
        console.log("success", data);
        setData(stockData);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, [name]); // Re-run when `name` changes

  return { data, error, loading };
};

export default useFetchStock;
