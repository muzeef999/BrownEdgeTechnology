"use client"
import React, { useEffect } from "react";
import { Sidebar } from "../../compoents/Sidebar";
import "../../Styles/sidebar.css"
import { useRouter } from "next/navigation";

const page = () => {
  const token = localStorage.getItem("token")
  const router = useRouter()
  useEffect(()=>{
   if(!token){
    router.push("/signIn")
   }
  },[])
  return (
    <div className="d-flex">
      
      <Sidebar />

      <h1 className="dai">Dashboard</h1>
      <h1 className="dai">Dashboard</h1>
      <h1 className="dai">Dashboard</h1>
      <h1 className="dai">Dashboard</h1>
      
    </div>
  );
};

export default page;
