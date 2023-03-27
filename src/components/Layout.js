import dynamic from "next/dynamic";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default dynamic(() => Promise.resolve(Layout), { ssr: false });
