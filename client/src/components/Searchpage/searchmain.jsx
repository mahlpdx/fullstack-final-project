import React from 'react';
import Search from "./search";
import Navbar from '../navbar';
import Footer from '../footer';

const Searchmain = () => {
    return (
      <div>
        <Navbar />
        <Search/>
        <Footer/>
      </div>
    );
};
export default Searchmain;