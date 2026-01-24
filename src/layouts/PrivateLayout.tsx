import { Outlet } from "react-router-dom";
import { Header } from '@/сomponents/Header';
import { Toaster } from '@/сomponents/ui/sonner';

export const PrivateLayout = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header/>
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
      <Toaster position="top-center" />
    </div>
  );
};
