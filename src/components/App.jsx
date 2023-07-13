import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import { BeerRecipeItem } from './BeerRecipeItem/BeerRecipeItem';

const BeerPage = lazy(() => import('../pages/BeerPage'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BeerPage />} />
        <Route path="/recipes/:id" element={<BeerRecipeItem />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
