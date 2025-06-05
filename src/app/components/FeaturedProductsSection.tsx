import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProductsSection: React.FC = () => {
  return (
    <>
      <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Products</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <ProductCard imageUrl="/images/product-1.jpg" title="Organic Himalayan Tea" />
        <ProductCard imageUrl="/images/product-2.jpg" title="Handwoven Pashmina Shawl" />
        <ProductCard imageUrl="/images/product-3.jpg" title="Fair Trade Coffee Beans" />
        <ProductCard imageUrl="/images/product-4.jpg" title="Artisan Crafted Incense" />
      </div>
    </>
  );
};

export default FeaturedProductsSection;