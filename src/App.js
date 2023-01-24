import React from 'react'
import { BrowserRouter } from "react-router-dom";
import PageTransition from './components/PageTransition';
import AuthLayout from './components/AuthLayout';
import { useAuth } from './contexts/Auth';
import './App.css'

function App() {
  const user = useAuth()
  return (
    <BrowserRouter>
      <PageTransition />
    </BrowserRouter>
  );
}

export default App;
