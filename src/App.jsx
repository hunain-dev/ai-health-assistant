import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Section/Home';
import Site from './pages/Home/Section/Site/Site';

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
    <div ref={scrollRef} className="h-full w-full  bg-[#F9F9F9]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Site" element={<Site />} />
      </Routes>
    </div>
  );
};

export default App;
