
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

  const saveStock = (stock) => {
    if (!stock || !stock.id) return; // Ensure valid stock
    setFavorites((prev) => {
      // Check for duplicates
      const updatedFavorites = prev.some((fav) => fav.id === stock.id)
        ? prev
        : [...prev, stock];

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const removeStock = (id) => {
    if (!id) return; // Ensure valid stock
    setFavorites((prev) => {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
      console.log("storedFavorites", storedFavorites)

      const updatedFavorites = storedFavorites.filter((item) => item.id != id);
      console.log("updatedFavorites", updatedFavorites)
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
      // return updatedFavorites;
    });
  };
  return { favorites, saveStock, removeStock };
};
export default useLocalStorage;
