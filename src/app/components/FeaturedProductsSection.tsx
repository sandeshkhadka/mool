"use client";
import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

const FeaturedProductsSection: React.FC = () => {
  const products = [
    
    {
      id: 2,
      imageUrl: "/dhoop.jpg",
      title: "Dhoop Single(7-pieces)",
      price: 350
    },
    {
      id: 3,
      imageUrl: "/dhoop_box.jpg",
      title: "Dhoop box Combo with holder",
      price: 900
    },
    {
      id: 4,
      imageUrl: "/gundri.jpg",
      title: "Traditional Nepali Gundri",
      price: 100
    },
    {
      id: 5,
      imageUrl: "/tapari.jpg",
      title: "Nepali Local Tapari",
      price: 10
    },
    {
      id: 6,
      imageUrl: "/muda.jpg",
      title: "Traditional Nepali Muda",
      price: 200
    }
  ];

  return (
    <>
      <h2
        id="shop"
        className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
      >
        Featured Products
      </h2>
      <div className="grid bg-gray-100 grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {products.map((product) => (
          <Link href="/coming-soon" key={product.id}>
            <ProductCard
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default FeaturedProductsSection;
