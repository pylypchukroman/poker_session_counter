import './App.css'
import {Suspense } from 'react';
import { HomePage } from './Pages/HomePage';
import { CashPage } from './Pages/CashPage';
import { TournamentsPage } from './Pages/TournamentsPage';
import { Routes, Route } from "react-router-dom";
import { NotFoundPage } from './Components/NotFoundPage';
import { DashboardPage } from './Pages/DashboardPage';


function App() {

  return (
    <Suspense fallback={<h1>LOADING...</h1>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cash" element={<CashPage />} />
        <Route path="/tournaments" element={<TournamentsPage />} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App
