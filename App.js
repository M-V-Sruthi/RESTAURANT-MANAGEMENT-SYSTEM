import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Orders from './Orders';
import NotFound from './NotFound';
// import First from './First.js';
// import First1 from './Container/First1';
import Header from './Container/Header';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/orders" element={<Orders />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App