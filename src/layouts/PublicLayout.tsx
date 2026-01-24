import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-black">
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
