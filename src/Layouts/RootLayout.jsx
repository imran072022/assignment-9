import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
        <ScrollToTop></ScrollToTop>
      </header>
      <main className="flex-1">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
