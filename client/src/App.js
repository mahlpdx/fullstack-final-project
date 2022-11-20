import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Mainpage from './components/Mainpage/main';
import Aboutmain from './components/Aboutpage/aboutmain';
import Searchmain from './components/Searchpage/searchmain';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/about" element={<Aboutmain/>}/>
        <Route path="/search" element={<Searchmain/>}/>
      </Routes>
    </>
  );
}

export default App;
