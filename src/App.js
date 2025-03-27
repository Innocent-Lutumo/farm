import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/HomePage';
import Purchase from './component/PurchasesPage';
import LoginPage from './component/LoginPage';
import RegistrationForm from './component/RegisterPage';
import Detailed from './component/Trial';

function App() {
  return (
      <Routes>
        <Route path="/*" element={< Home />} />
        <Route path="/ExamplePage" element={< Purchase />} />
        <Route path="/LoginPage" element={< LoginPage />} />
        <Route path="/RegisterPage" element={< RegistrationForm />} />
        <Route path="/Detailed" element={< Detailed />} />
      </Routes>
  );
}

export default App;
