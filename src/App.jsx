import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CocktailPage from './pages/CocktailPage';
import Error from './pages/Error';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cocktail/:id" element={<CocktailPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
