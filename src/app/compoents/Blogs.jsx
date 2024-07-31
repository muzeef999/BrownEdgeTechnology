'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { useRouter } from 'next/navigation';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let sliderRef = React.createRef();

  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://node-bqys.onrender.com/user/get');
        setBlogs(response.data);
        setLoading(false);
        console.log(response, "fsdfasdf");
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); // Added empty dependency array

  const senditem = (blog) => {
    router.push(`blogs/${blog._id}`);
  };

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
        onClick={() => sliderRef.current.slickNext()} // Access sliderRef.current
      />
    );
  };

  const PrevArrow = () => {
    return (
      <MdKeyboardArrowLeft
        className="slick-arrow"
        style={{ display: 'block', color: '#964b00', fontSize: '40px' }}
        onClick={() => sliderRef.current.slickPrev()} // Access sliderRef.current
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
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
      <Slider ref={c => (sliderRef.current = c)} {...settings}>
        {blogs?.map((blog) => (
          <div
            key={blog._id} // Use unique ID as key
            style={{
              borderRadius: '12px',
              padding: '12px',
              cursor: 'pointer',
              boxShadow: '5px 5px 10px #c3c3c3, -5px -5px 10px #fdfdfd',
              margin: '10px 10px' // Adjusted margin to create a gap between the divs
            }}
          >
            <img
              src={blog.img}
              className="blog-img"
              style={{
                width: '90%',
                height: 'auto',
                objectFit: 'cover',
                borderTopLeftRadius: '12px',
                borderTopRightRadius: '12px'
              }}
              alt="Blog Logo"
              onClick={() => senditem(blog)}
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
