import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner"

export const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-black">
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
};
