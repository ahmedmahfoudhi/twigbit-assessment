"use client";
import ProductCard from "@/components/ProductCard";
import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setErrorMessage("Failed to fetch products");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center mt-4">Products</h1>
      {loading ? (
        <Spinner />
      ) : errorMessage ? (
        <p className="text-red-500 font-bold text-center">{errorMessage}</p>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 p-4">
          {products.map(({ id, ...restProduct }) => (
            <ProductCard key={id} {...restProduct} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
