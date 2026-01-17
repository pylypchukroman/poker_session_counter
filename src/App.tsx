import './App.css'
import {Suspense } from 'react';
import { CashPage } from './Pages/CashPage';
import { TournamentsPage } from './Pages/TournamentsPage';
import { Routes, Route } from "react-router-dom";
import { DashboardPage } from './Pages/DashboardPage';
import { Login } from '@/Pages/Login';
import { Register } from '@/Pages/Register';
import { PublicRoute } from '@/routes/PublicRoute';
import { PrivateRoute } from '@/routes/PrivateRoute';
import { PublicLayout } from '@/layouts/PublicLayout';
import { PrivateLayout } from '@/layouts/PrivateLayout';
import { NotFoundPage } from '@/Pages/NotFoundPage';


function App() {

  return (
    <Suspense fallback={<h1>LOADING...</h1>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route element={<PublicLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>

        <Route element={<PrivateRoute />}>
          <Route element={<PrivateLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/cash" element={<CashPage />} />
            <Route path="/tournaments" element={<TournamentsPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App
