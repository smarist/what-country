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
      <Route path="" element={<Home />} />
      <Route path="/:nameId" element={<CountryDetail />} />
    </Routes>
  );
}

export default PageRoutes;
