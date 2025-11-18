import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Login from './pages/Forms/Login.jsx';
import Signup from './pages/Forms/Signup.jsx';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
    {/* <App /> */}
    <Login/>
    <Signup/>
    </ThemeProvider>

    </BrowserRouter>
 
  </StrictMode>
);
