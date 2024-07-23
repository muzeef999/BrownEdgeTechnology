"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [blogData, setBlogData] = useState(null);
  const { id } = useParams();


  useEffect(() => {
    const getBlogsData = async () => {
      try {
        const response = await fetch(`https://node-bqys.onrender.com/user/get`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setBlogs(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch blog data:', error);
        setError(error);
        setLoading(false);
      }
    };

    getBlogsData();
  }, []);

  useEffect(() => {
    if (blogs.length > 0) {
      const filteredBlog = blogs.find((item) => item._id === id);
      setBlogData(filteredBlog);
    }
  }, [blogs, id]);

  if (loading) {
    return (
      <div className="loaderbox">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const senddata = (item) =>{
    console.log(item._id,"item triggered")
    setBlogData(item)
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
          <h1 style={{ color: "#FFF", fontWeight: "500" }} className="about-data">
            Blogsss
          </h1>
        </div>
      </div>

      <br />
      <br />

      <div className="container">
        <div className="grid-container1">
        <div className="row d-flex">
        <div className="col-md-8">
        {blogData ? (
          <div className="">
              
           <div>
           <img
            className="img-dat"
            src={blogData.img} style={{borderTopLeftRadius:'8px', borderTopRightRadius:'8px'}}
            alt="image alt data"
          />
            </div>
            <div>
              <h2>{blogData.title}</h2>
              <p>{blogData.content}</p>
              {/* Add more fields as needed */}
            </div>
          </div>
        
        
        
          ) : (
            <p>No blog found with the provided ID.</p>
          )}
          </div>
          <div className="col-md-4">
          {
              blogs.map((item)=>{
                return(
                 <div key={item._id} className="d-flex">
                     <div className="col-md-6 d-grid">
                        <img onClick={()=>senddata(item)}
            className="img-data img-datas"
            src={item.img} style={{borderTopLeftRadius:'8px', borderTopRightRadius:'8px' }}
            alt="image alt data"
          />
                      </div>
                      <div className="ms-3">
                      <h5>{item.title.slice(0, 30)}</h5>
                      <p>{item.content.slice(0,80)}</p>
                      </div>
                  </div>
                )
              })
          }
          </div>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
