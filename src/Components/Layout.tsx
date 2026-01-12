import { Outlet } from "react-router-dom";
import { Header } from '@/Components/Header';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-black">
      {/*<Header/>*/}
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>

      {/* тут може бути Footer */}
    </div>
  )
}
