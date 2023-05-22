import { Outlet } from "react-router-dom";
import Nav from "../layouts/Nav.js";

export default function Root() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}
