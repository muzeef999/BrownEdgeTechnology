"use client"
import React, { useState } from 'react';
import "../Styles/sidebar.css";
import Link from 'next/link';

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className={`sidebar ${open ? 'open' : ''}`}
>
      <nav className="menu">
        <ul>
          <li><Link href="#">Dashboard</Link></li>
          <li><Link href="/postBlog">Blogs</Link></li>
          <li><Link href="#">Careers</Link></li>
          <li><Link href="#">Contac Us</Link></li>
          <li><Link href="#">Document</Link></li>
        </ul>
        <button className="toggle-btn" onClick={toggleSidebar}>
        {open ? 'Sidebar Close' : 'Sidebar Open'}
      </button>
      </nav>
    
    </div>
  );
};
