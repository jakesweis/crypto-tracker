import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Watchlists from './pages/watchlists';
import Settings from './pages/settings';
import Signin from './pages/sign-in';
import Form from './pages/sign-up/Form';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/watchlists' element={<Watchlists />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/form' element={<Form />} />
          <Route path='/sign-in' element={<Signin />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
