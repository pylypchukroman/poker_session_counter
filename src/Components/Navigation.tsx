import { NavLink } from 'react-router-dom';

export const Navigation = () => {

  return (
    <div className="flex items-center justify-between w-md">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white-500 font-semibold border-b-2 border-white h-full"
            : "text-gray-500 hover:text-white h-1/2"
        }
        to="/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white-500 font-semibold border-b-2 border-white"
            : "text-gray-500 hover:text-white"
        }
        to="/cash"
      >
        Cash
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white-500 font-semibold border-b-2 border-white"
            : "text-gray-500 hover:text-white"
        }
        to="/tournaments"
      >
        Tournaments
      </NavLink>
    </div>
  );
};
