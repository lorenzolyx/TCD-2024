import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/routes';
import './App.css';
import Sidebar from './app/components/sidebar/sidebar';
import Header from './app/components/header/header';


const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="page-content">
            <AppRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
