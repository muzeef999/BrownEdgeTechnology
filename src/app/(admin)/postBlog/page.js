"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Image from "next/image";
import bgcontact from "../../asserts/bgcontact.jpg";
import { IoIosAdd } from "react-icons/io";

const page = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)",
            backgroundColor: "#974c01",
            width: "80%",
            height: "350px",
          }}
        ></div>
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

      <div className="container">
        <div style={{ float: "right" }}>
          <button
            style={{
              backgroundColor: "#FFF",
              borderRadius: "2px",
              border: "1px solid #974c01",
            }}
          >
            <IoIosAdd />
            &nbsp;Add New Blogs
          </button>
        </div>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
    </>
  );
};

export default page;
