import { Outlet } from "@remix-run/react";

export default function Landing() {
  return (
    <div className={"max-w-screen-3xl mx-auto"}>
      <Outlet />
      <footer></footer>
    </div>
  );
}
