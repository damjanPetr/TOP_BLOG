import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Nav() {
  let location = useLocation();

  async function logout() {
    localStorage.clear();
  }

  const { user } = useAuth();
  return (
    <header className="content ms-center flex items-center justify-between  bg-red-100 p-2 text-red-600">
      <div className="logo">
        <NavLink to={"/"}>Home</NavLink>
      </div>
      <nav className=" flex items-center justify-between gap-3">
        <ul className=" flex list-none gap-4 p-2">
          {[["/posts", "posts"]].map(([location, value]) => (
            <li key={location}>
              <NavLink to={location}>{value}</NavLink>
            </li>
          ))}
        </ul>
        {!user ? (
          <div className=" rounded-sm bg-blue-600 p-1">
            <Link to={"/signup"}>Sign Up</Link>
          </div>
        ) : null}
        {!user ? (
          <div className=" rounded-sm bg-blue-600 p-1">
            <Link to={"/login"}>Login Page</Link>
          </div>
        ) : null}
        {user ? (
          <div className=" rounded-sm bg-blue-600 p-1">
            <button onClick={logout}>Logout</button>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
