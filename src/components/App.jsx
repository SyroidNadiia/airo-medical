import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';

const BeerPage = lazy(() => import('../pages/BeerPage'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BeerPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
