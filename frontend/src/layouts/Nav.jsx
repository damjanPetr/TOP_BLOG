import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <header className="content flex items-center justify-between rounded-b-md bg-teal-500 p-2 text-white">
      <div className="logo">
        <NavLink to={"/"}>Home</NavLink>
      </div>
      <nav>
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
      </nav>
    </header>
  );
}
