import { Outlet } from "@remix-run/react";
import { Footer } from "~/routes/_landing/footer";

export default function Landing() {
  return (
    <div className={"max-w-screen-3xl mx-auto flex flex-col gap-12 md:gap-28"}>
      <Outlet />
      <Footer />
    </div>
  );
}
