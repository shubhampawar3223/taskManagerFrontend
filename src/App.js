import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home/index';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
