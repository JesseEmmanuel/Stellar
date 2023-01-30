import React from 'react'
import { BrowserRouter } from "react-router-dom";
import PageTransition from './components/PageTransition';
import { useAuth } from './contexts/Auth';
import { Provider } from 'react-redux';
import store from './store';
import './App.css'

function App() {
  const user = useAuth()
  return (
      <Provider store={store}>
        <BrowserRouter>
          <PageTransition />
        </BrowserRouter>
      </Provider> 
  );
}

export default App;
