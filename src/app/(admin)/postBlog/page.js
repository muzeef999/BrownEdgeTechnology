"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { IoIosAdd, IoIosCreate, IoIosTrash } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
// Dynamically import ReactQuill with no SSR
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { Sidebar } from "../../compoents/Sidebar";
import Slider from "react-slick";
import { useRouter } from "next/navigation";


const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const [currentBlog, setCurrentBlog] = useState({
    title: "",
    img: "",
    author: "",
    content: "",
  });
  const [file, setFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [storedata, setStoredata] = useState([]); // Fixed state variable name

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/signIn");
    }
  }, [router]);

  const getFile = (event) => {
    const uploadedFile = event.target.files[0];

    if (uploadedFile) {
      if (uploadedFile.size > 3 * 1024 * 1024) {
        alert("File size exceeds the limit of 3 MB.");
        return;
      }

      if (!uploadedFile.type.includes("image")) {
        alert("Only image formats are allowed.");
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(uploadedFile);
      reader.onload = () => {
        setFile(reader.result);
        setCurrentBlog((prevBlog) => ({
          ...prevBlog,
          img: reader.result,
        }));
      };
      reader.onerror = (error) => {
        console.log("Error:", error);
      };
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleClose = () => setShows(false);
  const handleShows = () => setShows(true);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("https://node-bqys.onrender.com/user/get");
      const data = await response.json();
      setBlogs(data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://node-bqys.onrender.com/user/create${isEditing ? `/${currentBlog._id}` : ""}`,
        {
          method: isEditing ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(currentBlog),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setMessage(
          isEditing
            ? "Blog updated successfully!"
            : "Blog created successfully!"
        );
        setCurrentBlog({ title: "", author: "", content: "", img: "" });
        setFile(null);
        setIsEditing(false);
        fetchBlogs();
      } else {
        setMessage(result.message || "Error saving blog");
      }
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  };

  const handleEdit = (blog) => {
    setCurrentBlog(blog);
    setFile(blog.img);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://node-bqys.onrender.com/user/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setMessage("Blog deleted successfully!");
        fetchBlogs();
      } else {
        setMessage("Error deleting blog");
      }
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  };

  const showData = (blog) => {
    setStoredata(blog);
    setShow(true);
  };

  return (
    <div className="pageContainer">
      <div className="menubar">
        <Sidebar />
      </div>
      <div className="container data-contain">
        <form onSubmit={handleSubmit}>
          <div className="my-5 mb-2">
            <div className="d-flex justify-content-between align-items-center pe-5">
              <div>
                <input
                  style={{ marginTop: "100px" }}
                  type="file"
                  className="fileUpload"
                  accept="image/*"
                  onChange={getFile}
                  required
                />
                <br />
                <br />
                {file && <img src={file} className="imageupload" alt="uploaded" />}
              </div>
              <div className="my-5">
                <Button variant="primary" className="offcanvas-nav" onClick={handleShows}>
                  Launch
                </Button>
              </div>
            </div>

            <br />

            <input
              type="text"
              placeholder="Title"
              value={currentBlog.title}
              onChange={(e) =>
                setCurrentBlog({ ...currentBlog, title: e.target.value })
              }
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Author"
              value={currentBlog.author}
              onChange={(e) =>
                setCurrentBlog({ ...currentBlog, author: e.target.value })
              }
              required
              className="form-control"
            />
          </div>
          {typeof window !== "undefined" && (
            <ReactQuill
              theme="snow"
              value={currentBlog.content}
              onChange={(content) =>
                setCurrentBlog({ ...currentBlog, content })
              }
            />
          )}
          <div>
            <button
              className="btn btn-danger my-3"
              type="submit"
              style={{
                backgroundColor: "black",
                borderRadius: "2px",
                border: "1px solid #974c01",
              }}
            >
              <IoIosAdd />
              &nbsp;{isEditing ? "Update Blog" : "Add New Blog"}
            </button>
          </div>
          {message && <p>{message}</p>}
        </form>
        <div>
          <div className="container">
            <div className="row">
              {blogs && blogs.map((blog) => (
                <div className="col-md-4" key={blog._id}>
                  <div
                    key={blog._id}
                    style={{
                      border: "1px solid #ccc",
                      padding: "10px",
                      margin: "10px 0",
                    }}
                  >
                    <img
                      src={blog.img}
                      style={{
                        width: '100%',
                        height: '250px',
                        objectFit: 'cover',
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px'
                      }}
                      alt={blog.title}
                    />
                    <h3>{blog.title.slice(0, 50)}</h3>
                    <p>{blog.author}</p>
                    <p>{blog.content.slice(0, 130)}</p>
                    <div className="d-flex justify-content-evenly align-items-center">
                      <button
                        className="btn btn-success"
                        onClick={() => handleEdit(blog)}
                      >
                        <IoIosCreate />
                        &nbsp;Edit
                      </button>
                      <button
                        className="btn btn-danger ms-3"
                        onClick={() => handleDelete(blog._id)}
                      >
                        <IoIosTrash />
                        &nbsp;Delete
                      </button>
                      <button
                        className="btn btn-success ms-3"
                        onClick={() => showData(blog)}
                      >
                        <MdOutlineRemoveRedEye />
                        &nbsp;View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Data Container */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img
              src={storedata && storedata.img}
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                borderTopLeftRadius: '12px',
                borderTopRightRadius: '12px'
              }}
              alt={storedata.title}
            />
            <h3>{storedata && storedata.title}</h3>
            <p>{storedata && storedata.author}</p>
            <p>{storedata && storedata.content}</p>
          </div>
        </Modal.Body>
      </Modal>
      {/* Data Container End */}

      <Offcanvas show={shows} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Sidebar />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Page;