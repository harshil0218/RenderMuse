import React from "react";
import { Navbar, Footer, Welcome, Pricing,Aboutus } from "../Components";
function Home() {
  return (
    <div className="dark:bg-gray-800 ">
      <Navbar className="sticky top-0 z-50"/>
      <Welcome />
      <Pricing />
      <Aboutus />
      <Footer />
    </div>
  );
}

export default Home;
