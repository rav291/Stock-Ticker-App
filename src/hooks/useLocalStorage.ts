"use client";
import { useEffect, useState } from "react";

const useLocalStorage = () => {
  const [favorites, setFavorites] = useState([]);

  // Fetch saved stocks from local storage
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Save stock to local storage
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const saveStock = (stock) => {
    if (!stock || !stock.id) return; // Ensure valid stock
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setFavorites((prev) => {
      // Check for duplicates
      const updatedFavorites = prev.some((fav) => fav.id === stock.id)
        ? prev
        : [...prev, stock];

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };
  return { favorites, saveStock };
};
export default useLocalStorage;
