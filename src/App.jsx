import React from 'react'
import Home from './pages/Home/Section/Home'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Home/>
    </div>
  )
}

export default App
