import './App.css'
import {Suspense } from 'react';
import { CashPage } from './Pages/CashPage';
import { TournamentsPage } from './Pages/TournamentsPage';
import { Routes, Route } from "react-router-dom";
import { NotFoundPage } from './Components/NotFoundPage';
import { DashboardPage } from './Pages/DashboardPage';
import { Layout } from '@/Components/Layout';
import { Login } from '@/Pages/Login';
import { Register } from '@/Pages/Register';
import { HomePage } from '@/Pages/HomePage';


function App() {

  return (
    <Suspense fallback={<h1>LOADING...</h1>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cash" element={<CashPage />} />
          <Route path="/tournaments" element={<TournamentsPage />} />
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App
