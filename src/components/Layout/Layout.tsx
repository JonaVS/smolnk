import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

type props = {
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ children }: props) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex flex-col grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
