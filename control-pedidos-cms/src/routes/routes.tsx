import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../app/pages/dashboard/dashboard';
import Order from '../app/pages/order/order';
import Products from '../app/pages/products/products';
import Settings from '../app/pages/settings/settings';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/orders" element={<Order />} />
      <Route path="/products" element={<Products />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
