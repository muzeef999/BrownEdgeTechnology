'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

import { API_URL } from '../config'; // Update the path as necessary


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let sliderRef = React.createRef();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_URL}/blogs`);
        setBlogs(response.data.blogs);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const NextArrow = () => {
    return (
      <MdKeyboardArrowRight
        className="slick-arrow"
        style={{ display: 'block', color: '#964b00', fontSize: '40px' }}
        onClick={() => sliderRef.slickNext()}
      />
    );
  };

  const PrevArrow = () => {
    return (
      <MdKeyboardArrowLeft
        className="slick-arrow"
        style={{ display: 'block', color: '#964b00', fontSize: '40px' }}
        onClick={() => sliderRef.slickPrev()}
      />
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
   
  };

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center p-3'>
        <h1>Blogs</h1>
        <div className='d-flex'>
          <PrevArrow />
          <NextArrow />
        </div>
      </div>
      <Slider ref={c => (sliderRef = c)} {...settings}>
      {blogs?.map((blog, index) => (
  <div 
    key={index} 
    style={{
      borderRadius: '12px',
      padding: '12px',
      boxShadow: '5px 5px 10px #c3c3c3, -5px -5px 10px #fdfdfd',
      margin: '10px 10px !important' // Adding margin to create a gap between the divs
    }}>
    <img 
      src={blog.img} 
      style={{
        width: '100%', 
        height: 'auto', 
        objectFit: 'cover', 
        borderTopLeftRadius: '12px', 
        borderTopRightRadius: '12px'
      }} 
      alt="Blog Logo" 
    />
    <div>
      <h5>{blog.title}</h5>
      <p>{blog.description}</p>
    </div>
  </div>
))}

        
      </Slider>
    </div>
  );
};

export default Blogs;
