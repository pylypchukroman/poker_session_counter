import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className="flex space-x-30">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink
        to="/cash"
      >
        Cash
      </NavLink>
      <NavLink
        to="/tournaments"
      >
        Tournaments
      </NavLink>
    </div>
  )
}
