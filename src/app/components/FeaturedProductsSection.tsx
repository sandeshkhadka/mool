"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

type Product = {
  id: number;
  imageUrl: string;
  title: string;
};

const FeaturedProductsSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/c/b2e3-62b8-46e5-b171`
      );
      const json = await response.json();
      setProducts(json.products);
    }

    fetchProducts();
  }, []);

  return (
    <>
      <h2
        id="shop"
        className="text-[#181411]   text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
      >
        Featured Products
      </h2>
      <div className="grid bg-gray-100 grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <ProductCard imageUrl={product.imageUrl} title={product.title} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default FeaturedProductsSection;
