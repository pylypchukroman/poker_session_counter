import { NavLink } from 'react-router-dom';

export const Navigation = () => {

  return (
    <div className="flex items-center justify-between w-md">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white font-semibold border-b-2 border-white h-full text-sm md:text-base"
            : "text-gray-500 hover:text-white h-1/2 text-sm md:text-base"
        }
        to="/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white-500 font-semibold border-b-2 border-white text-sm md:text-base"
            : "text-gray-500 hover:text-white text-sm md:text-base"
        }
        to="/cash"
      >
        Cash
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white-500 font-semibold border-b-2 border-white text-sm md:text-base"
            : "text-gray-500 hover:text-white text-sm md:text-base"
        }
        to="/tournaments"
      >
        Tournaments
      </NavLink>
    </div>
  );
};
