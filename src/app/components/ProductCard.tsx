import React from 'react';

interface ProductCardProps {
  imageUrl: string;
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title }) => {
  return (
    <div
      className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-4 aspect-square"
      style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url("${imageUrl}")` }}
    >
      <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">{title}</p>
    </div>
  );
};

export default ProductCard;