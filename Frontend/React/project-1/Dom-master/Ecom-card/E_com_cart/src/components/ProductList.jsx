// src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';
import ballImage from '../item/ball.jpeg'; // Importing the image


const ProductList = () => {
  const products = [
    { id: 1, name: 'Product 1', description: 'This is product 1', price: 10, image: '../item/ball.jpeg' },
    { id: 2, name: 'Product 2', description: 'This is product 2', price: 20, image: '/path/to/image2.jpg' },
    { id: 3, name: 'Product 3', description: 'This is product 3', price: 30, image: '/path/to/image3.jpg' },
    { id: 4, name: 'Product 4', description: 'This is product 4', price: 40, image: '/path/to/image4.jpg' }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
