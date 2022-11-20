import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Mainpage from './components/Mainpage/main';
import Aboutmain from './components/Aboutpage/aboutmain';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/about" element={<Aboutmain/>}/>
      </Routes>
    </>
  );
}

export default App;
