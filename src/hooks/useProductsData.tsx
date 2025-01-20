import { ProductTypes } from "@/types";
import { useState, useEffect } from "react";

const useProductsData = () => {
  const [productsData, setProductsData] = useState<ProductTypes[] | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProductsData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { productsData, error, loading };
};

export default useProductsData;
