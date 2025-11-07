import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Section/Home';
import Site from './pages/Home/Section/Site/Site';
import Loader from './Components/Loader';
import Login from './pages/Forms/Login';
import Signup from './pages/Forms/Signup';

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const loco = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
      return () => loco.destroy();
    }
  }, []);

  return (
    <div ref={scrollRef} className="h-full w-full  ">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Site" element={<Site />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

      </Routes>
    </div>
  );
};

export default App;
