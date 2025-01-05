import React from "react";
import { dummyDB } from "./components/DB/dummy";

const ProductCarousel = () => {
  const products = dummyDB || []

  return (
    <div className="bg-base-200 min-h-screen">
      
      {/* Product Carousel */}
      
        {/* Carousel Container */}
        <div className="overflow-x-auto whitespace-nowrap">
          <div className="flex gap-6">
            {/* Product Cards */}
            {products.map((product, index) => (
              <h1>index : {index}</h1>
            ))}
          </div>
        </div>
    
    </div>
  );
};

export default ProductCarousel;
