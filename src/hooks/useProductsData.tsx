import { useState, useEffect } from "react";
import { Product } from "@/types/types";

const useProductsData = () => {
  const [productsData, setProductsData] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          mode: "cors",
        });
        if (!response.ok) {
          throw new Error("Server error");
        }
        const data: Product[] = await response.json();
        setProductsData(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { productsData, error, loading };
};

export default useProductsData;
