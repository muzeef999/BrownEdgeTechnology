"use client";
import React, { useEffect } from "react";
import { Sidebar } from "../../compoents/Sidebar";
import "../../Styles/sidebar.css";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (!token) {
      router.push("/signIn");
    }
  }, [router]);

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

export default Page;
