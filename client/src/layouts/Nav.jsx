import { Link, NavLink, useLocation } from "react-router-dom";
export default function Nav() {
  let location = useLocation();
  return (
    <header className="content mx-10 flex items-center justify-between rounded-b-md bg-teal-500 p-2 text-white">
      <div className="logo">
        <NavLink to={"/"}>Home</NavLink>
      </div>
      <nav className=" flex items-center justify-between gap-3">
        <ul className=" flex list-none gap-4 p-2">
          {[
            ["/location", "blogs"],
            ["/anata", ["place"]],
          ].map(([location, value]) => (
            <li key={location}>
              <NavLink to={location}>{value}</NavLink>
            </li>
          ))}
        </ul>
        {location.pathname !== "/signup" ? (
          <div className=" rounded-sm bg-red-600 p-1">
            <Link to={"/signup"}>Sign Up</Link>
          </div>
        ) : null}
        {location.pathname !== "/login" ? (
          <div className=" rounded-sm bg-red-600 p-1">
            <Link to={"/login"}>Login Page</Link>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
