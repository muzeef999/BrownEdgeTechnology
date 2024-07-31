"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Sidebar } from '../../compoents/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
const createCareer = async (careerData) => {
  try {
    const response = await axios.post('https://node-bqys.onrender.com/postcarear/create', careerData);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};



const Page = () => {
  const [location, setLocation] = useState('');
  const [jobpost, setJobpost] = useState('');
  const [experience, setExperience] = useState('');
  const [description, setDescription] = useState('');
  const [appliedDate, setAppliedDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const careerData = {
      location,
      jobpost,
      experience,
      description,
      appliedDate,
    };
    try {
      const newCareer = await createCareer(careerData);
      console.log(newCareer);
      toast.success('Career post saved successfully!');


    } catch (error) {
      console.error(error);
    }
  };
  const[hold,sethold]=useState([])
  const [data,setdata]=useState([])
  useEffect(()=>{
    axios.get("https://node-bqys.onrender.com/postcarear/")
    .then((res)=>{
      console.log(res.data,"caret")
      sethold(res.data)
    }) 
    .catch((err)=>{ 
      console.log(err)
    })
      },[])


      useEffect(()=>{
        axios.get("https://node-bqys.onrender.com/carear/get")
        .then((res)=>{
          console.log(res.data)
          setdata(res.data)
        })
        .catch((err)=>{
          console.log(err)
        })
          },[])

      const deleteitem = (item) => {
        axios.delete(`https://node-bqys.onrender.com/postcarear/delete/${item._id}`)
          .then((res) => {
            console.log('Delete successful:', res.data);
            toast.success('Delete Successfully');
          })
          .catch((err) => {
            console.error('Error deleting item:', err);
          });
      };

      const deleteitems = (item) =>{
          axios.delete(`https://node-bqys.onrender.com/carear/delete/${item._id}`)
          .then((res)=>{
            console.log(res)
            toast.success('Delete Successfully');
          })
          .catch((err)=>{
            console.log(err)
          })
      }
  return (
    <div>
      <div className="pageContainer  ">
    <div className="menubar">
    <Sidebar />
    </div>
     
    <div className=" container" style={{marginTop:"130px"}}>
    <ToastContainer />
    <div className='d-flex justify-content-between'>
      <div >
      <h1 className='mb-3'>Create Career Application</h1>
      </div>
      <div className='me-3'>
      <Button variant="primary" className='offcanvas-nav' onClick={handleShow}>
        Launch
      </Button>
      </div>
    </div>
      <form onSubmit={handleSubmit} className='d-grid w-100'>
        <label>
          Job Post:
          <input className='form-control' type="text" value={jobpost} onChange={(e) => setJobpost(e.target.value)} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" className='form-control' value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <br />
        <label>
          Experience:
          <input className='form-control' type="text" value={experience} onChange={(e) => setExperience(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div className='my-5'>
      <h2>Availabe Jobs</h2>
    </div>
    <div className="table-responsive">
  <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Number</th>
        <th>Post Name</th>
        <th>Location</th>
        <th>Experience</th>
        <th>About This JOb</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        hold && hold.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.jobpost}</td>
            <td>{item.location}</td>
            <td>{item.experience}</td>
            <td>{item.description}</td>
            <td>
              <button onClick={() => deleteitem(item)} className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        ))
      }
    </tbody>
  </Table>
</div>
    <div className='table-responsive'>
      <h2 className='mb-4'>Applied Jobs</h2>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Applied Position</th>
          <th>Description</th>
          <th>Delete</th>
        </tr>
      </thead>

<tbody>
{
     data && data.map((item,index)=>{
      return(
        <tr key={index}>
          <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.number}</td>
              <td>{item.appliedPosition
              }</td>
               <td>{item.description
              }</td>
              <td><button onClick={()=>deleteitems(item)} className='btn btn-danger'>Delete </button></td>
        </tr>
      )
     })
      }
</tbody>
    
      </Table>
    </div>
    </div>
    </div>

    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{backgroundColor:"#ffe6cc"}}>
       <Sidebar />
        </Offcanvas.Body>
      </Offcanvas>
  
    </div>
  );
};

export default Page;
