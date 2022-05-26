import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="search"> </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
