import logoWhite from "~/assets/images/logo-white.svg";
import { Link } from "@remix-run/react";

export function Footer() {
  return (
    <footer
      className={
        "general-px bg-primary  justify-between  py-16 text-white gap-8 md:gap-0 flex flex-col md:flex-row"
      }
    >
      <div>
        <Link to={"/"}>
          <img src={logoWhite} alt="Economic Logo" />
        </Link>
      </div>
      <div className={"flex flex-col gap-8"}>
        <strong className={"opacity-40"}>INFO</strong>
        <ul className={"flex flex-col gap-2"}>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/"}>For customers</Link>
          </li>
          <li>
            <Link to={"/"}>For customers</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contacts</Link>
          </li>
        </ul>
      </div>
      <div className={"flex flex-col gap-8"}>
        <strong className={"opacity-40"}>CONTACT US</strong>
        <ul className={"flex flex-col gap-2"}>
          <li>+234 980 871</li>
          <li>infisane@gmail.com</li>
        </ul>
      </div>
      <div className={"flex flex-col gap-8"}>
        <strong className={"opacity-40"}>FIND US </strong>
        <span>Abuja</span>
        <span>Everyday from 10am to 8pm</span>
      </div>
    </footer>
  );
}
