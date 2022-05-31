import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './globals';
import LandingPage from './components/LandingPage';
import Search from './components/Search';
import NavBar from './components/NavBar';

export default function App() {
	 // represents main section
  const aboutRef = useRef(null); // represents about section
  const howToUseRef = useRef(null);
  return (
    <>
      <Router>
        <GlobalStyle />
        <NavBar />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/#howItWorks" element={<LandingPage />} />
          <Route path="/#about" element={<LandingPage />} />
          <Route path="search/javascript" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}
