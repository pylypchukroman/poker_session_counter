import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
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
    </>
  )
}
