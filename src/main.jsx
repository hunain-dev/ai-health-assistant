import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Login from './pages/Forms/Login.jsx';
import Signup from './pages/Forms/Signup.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      {/* <Signup  /> */}
      {/* <Login   /> */}
    </BrowserRouter>
 
  </StrictMode>
);
