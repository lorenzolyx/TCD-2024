import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../app/pages/dashboard/dashboard';
import Order from '../app/pages/order/order';
import Products from '../app/pages/products/products';
import Settings from '../app/pages/settings/settings';
import Framing from '../app/pages/framing/framing';
import Type from '../app/pages/type/type';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products-order" element={<Order />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products-framing" element={<Framing />} />
      <Route path="/products-type" element={<Type />} />
      <Route path="/settings" element={<Settings />} />

    </Routes>
  );
};

export default AppRoutes;
