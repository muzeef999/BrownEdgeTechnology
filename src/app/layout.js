"use client"
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navabar from "./compoents/Navabar";
import { Footer } from "./compoents/Footer";
import { useEffect } from "react";



export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body>
        <Navabar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
