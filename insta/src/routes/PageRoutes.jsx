
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/LoginPage/Login';
import Register from '../pages/RegisterPage/Register';
import Home from '../pages/Home/Home';

import ProtectedRoute from './ProtectedRoute';
import Homepage from '../pages/Home/Homepage';
// import DynamicGraph from '../pages/Protected/Profile/components/DynamicGraph';
import ProfilePage from '../pages/Protected/Profile/ProfilePage';

const PageRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/home" element={
            <ProtectedRoute >
              <ProfilePage />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default PageRoutes;
