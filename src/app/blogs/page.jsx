"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bgcontact from "../asserts/aboutus.jpg";
import Link from "next/link";

const BlogPage = () => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBlogsData = async () => {
      try {
        const response = await fetch("/api/blogs");
        const jsonData = await response.json();
        setBlog(jsonData.blogs);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };

    getBlogsData();
  }, []);

  console.log(blog);

  if (loading) {
<<<<<<< HEAD
    return <div className="loaderbox">
    <div className="loader"></div>
  </div>;
=======
    return <p>Loading...</p>;
>>>>>>> origin/main
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
     <div className="position-relative video-container">
        <div className="embed-responsive embed-responsive-16by9">
          <video
            className="embed-responsive-item"
            src="/blog.mp4"
            muted
            autoPlay
            loop
          ></video>
        </div>
        <div
          className="position-absolute w-100 h-100"
          style={{ top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>
        <div className="container sec position-absolute top-50 start-50 translate-middle text-center">
          <h1
            style={{ color: "#FFF", fontWeight: "500" }}
            className="about-data"
          >
<<<<<<< HEAD
            Blogsss
=======
            Blogs
>>>>>>> origin/main
          </h1>
        </div>
      </div>

      <br />
      <br />

      <div className="container">
  <div className="grid-container1">
    {blog?.map((item) => (
      <div className="grid-item1" key={item._id}>
<<<<<<< HEAD
        <Link href={`blogs/${item._id}`} style={{textDecoration:'none'}}>
=======
        <Link href="/home" style={{textDecoration:'none'}}>
>>>>>>> origin/main
          <img
            className="img-data"
            src={item.img} style={{borderTopLeftRadius:'8px', borderTopRightRadius:'8px'}}
            alt="image alt data"
          />
          <h5 className="grid-item-text" style={{textDecoration:'none'}}>{item.title}</h5>
        </Link>
      </div>
    ))}
  </div>
</div>

    </>
  );
};

export default BlogPage;