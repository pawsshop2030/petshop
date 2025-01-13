import React, { useEffect, useState } from 'react';

import Products from '../Products/Products.js';
import ProfileBar from './ProfileBar.js';
import { baseURL } from '../../constant/url.js';

const HomePage = () => {
  const [searchItem, setSearchItem] = useState('');
  const [categories, setCategories] = useState([]); // Initialize as an empty array
  const [tags, setTags] = useState([]); // Initialize as an empty array
  const [searchCategory, setSearchCategory] = useState(''); // Initialize as an empty array
  const [searchTag, setSearchTag] = useState(''); // Initialize as an empty array

  const filter = async (field) => {
    try {
      const response = await fetch(`${baseURL}/api/admin/product/prd/filter?field=${field}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      return data; // This should be an array of categories
    } catch (error) {
      console.error(error);
      return []; // Return an empty array in case of error
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await filter('category');
      setCategories(categoriesData); // Set the fetched categories
      const tagData = await filter('tag');
      setTags(tagData); // Set the fetched categories
    };

    fetchCategories();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="bg-base-200 text-black">
      {/* Navbar */}
      <nav className="bg-yellow-500 text-neutral-content">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">SUN SHINE </a>
        </div>

        <div className="flex justify-evenly">
          {/* Search */}
          <input
            type="text"
            placeholder="Search for products..."
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="mb-1 input input-bordered w-full max-w-xs text-black"
          />
          {/* Filter */}
          <select className="mb-1 select select-bordered w-full max-w-xs text-black" onChange={(e) => {setSearchCategory(e.target.value)}}>
              <option value=''>category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          {/* Tags */}
          <select className="mb-1 select select-bordered w-full max-w-xs  text-black" onChange={(e) => {setSearchTag(e.target.value)}}>
              <option value=''>tag</option>
            {tags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          {/* Account */}
          <ProfileBar />
        </div>
      </nav>

      {/* Carousel */}
      <div className="carousel w-full mt-5">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://via.placeholder.com/800x300" className="w-full" alt="Slide 1" />
          <a href="#slide3" className="btn btn-circle absolute left-5 top-1/2">❮</a>
          <a href="#slide2" className="btn btn-circle absolute right-5 top-1/2">❯</a>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://via.placeholder.com/800x300" className="w-full" alt="Slide 2" />
          <a href="#slide1" className="btn btn-circle absolute left-5 top-1/2">❮</a>
          <a href="#slide3" className="btn btn-circle absolute right-5 top-1/2">❯</a>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://via.placeholder.com/800x300" className="w-full" alt="Slide 3" />
          <a href="#slide2" className="btn btn-circle absolute left-5 top-1/2">❮</a>
          <a href="#slide1" className="btn btn-circle absolute right-5 top-1/2">❯</a>
        </div>
      </div>

      {/* Product List */}
      <Products 
      searchItem={searchItem} 
      searchCategory={searchCategory} 
      searchTag={searchTag} 
      />
    </div>
  );
};

export default HomePage;
