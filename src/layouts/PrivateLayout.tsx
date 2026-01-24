import { Outlet } from "react-router-dom";
import { Header } from '@/сomponents/Header';

export const PrivateLayout = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header/>
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
