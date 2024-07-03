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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)",
            backgroundColor: "#974c01",
            width: "80%",
            height: "350px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            color: "#FFF",
          }}
        >
          {" "}
          <h1>Blog</h1>
        </div>
        <Image
          src={bgcontact}
          alt="image"
          style={{
            width: "auto",
            height: "350px",
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: -999,
          }}
        />
      </div>

      <br />
      <br />

      <div className="container">
        <div className="grid-container">
          {blog.map((item) => (
            <Link href={"/home"} className="bor grid-item" key={item._id}>
              <Image
                src={item.img}
                width={100}
                height={100}
                alt="image alt data"
              />
              <h5>{item.title}</h5>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;