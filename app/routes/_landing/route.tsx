import { Outlet } from "@remix-run/react";

export default function Landing() {
  return (
    <div className={"max-w-screen-2xl mx-auto"}>
      <Outlet />
      <footer></footer>
    </div>
  );
}
