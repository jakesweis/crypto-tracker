import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Watchlists from './pages/watchlists';
import Settings from './pages/settings';
import Signup from './pages/sign-up';
import Signin from './pages/sign-in';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/watchlists' element={<Watchlists />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/sign-in' element={<Signin />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
