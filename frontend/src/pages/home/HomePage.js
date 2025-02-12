import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

import Products from '../Products/Products.js';
import ProfileBar from './ProfileBar.js';
import { baseURL } from '../../constant/url.js';
import logo3 from '../../assets/images/logo3.jpg'
import { aboutUs } from '../../components/DB/dummy.js';

const HomePage = () => {
  const [searchItem, setSearchItem] = useState('');
  const [categories, setCategories] = useState([]); // Initialize as an empty array
  const [tags, setTags] = useState([]); // Initialize as an empty array
  const [searchCategory, setSearchCategory] = useState(''); // Initialize as an empty array
  const [searchTag, setSearchTag] = useState(''); // Initialize as an empty array
  const Navigate = useNavigate();

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

  const AboutUsToast = ({ t, message }) => (
    <div className="p-4 bg-white shadow-md rounded-lg  items-start w-96">
      <button
        className="ml-4 text-gray-500 w-full hover:text-gray-700 flex justify-end"
        onClick={() => toast.dismiss(t.id)}
      >
        <p size={18} className=' bg-red-600 text-white aspect-square min-h-7 mr-5' >X</p>
      </button>
      <p className="text-sm text-gray-800 text-justify">{message}</p>
    </div>
  );
  

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
      <nav className="bg-yellow-500 text-white">
        <div className="flex justify-between">
          <div>
            <a onClick={() => {Navigate('user/contact')}} className="btn btn-ghost normal-case text-xl">SUN SHINE 
            <img src={logo3} className='max-h-10'></img></a>
          </div>
          <div className='pr-5 '>
            <button onClick={() => {
              toast.custom((t) => <AboutUsToast t={t} message={aboutUs}/> , { duration: Infinity })
            }} className='mx-2 underline  hover:shadow-yellow-800 hover:shadow-lg'>About us</button>
            <button onClick={() => {Navigate('user/contact')}} className='mx-2 underline  hover:shadow-yellow-800 hover:shadow-lg'>Contact us</button>
          </div>
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
          {/* Category */}
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
