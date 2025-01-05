import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import { useQueryClient } from '@tanstack/react-query';

const ProductsTemplate = ({ product }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate(); // Correct usage of useNavigate
  
  const handleClick = () => {
    // Navigate to the product detail page
    navigate(`/product/${product._id}`); // Use _id if that's your product identifier
  };

  return (
    <div key={product._id} className="bg-white shadow-md" onClick={handleClick}>
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="rounded-t-lg w-full h-40 object-cover border-2"
        
      />

      {/* Product Info */}
      <div className="p-4 cursor-default" >
        <h2 className="card-title ">{product.name}</h2>
        <p>${product.price}</p>
      </div>

      
    </div>
  );
};

export default ProductsTemplate;
