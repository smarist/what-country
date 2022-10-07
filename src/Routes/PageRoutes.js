import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from '../pages/Home';
import CountryDetail from '../pages/CountryDetail';

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route exact path="/:nameId" element={<CountryDetail />} />
    </Routes>
  );
}

export default PageRoutes;
