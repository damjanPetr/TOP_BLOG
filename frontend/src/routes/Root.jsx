import { Outlet } from "react-router-dom";
import Nav from "../layouts/Nav";
export default function Root() {
  return (
    <>
      <Nav />
      <main className="flex">
        <Outlet />
      </main>
    </>
  );
}
