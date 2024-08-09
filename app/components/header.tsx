import { useState } from "react";
import logoWhite from "~/assets/images/logo-white.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "@remix-run/react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
    isActive ? "font-bold" : "font-normal";

  return (
    <>
      <header className="relative bg-transparent flex items-center justify-between general-px pt-4 lg:pt-12">
        <Link to={"/"}>
          <img
            className="grow-0 w-full shrink-0"
            src={logoWhite}
            height={29}
            width={116}
            alt="Econswift logo"
          />
        </Link>

        <button onClick={handleClick} className="md:hidden z-50">
          {!isOpen ? (
            <GiHamburgerMenu />
          ) : (
            <AiOutlineClose className={"text-black"} />
          )}
        </button>
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex z-30 md:static bg-white text-black pt-4 md:pt-0 md:text-white md:bg-transparent absolute md:h-auto md:w-auto w-[70vw] h-screen items-center top-0 right-0 flex flex-col md:flex-row gap-6 md:gap-16`}
        >
          <NavLink className={navLinkStyles} to="/">
            Home
          </NavLink>
          <NavLink className={navLinkStyles} to="/about">
            About
          </NavLink>
          <NavLink className={navLinkStyles} to="/services">
            Services
          </NavLink>
          <NavLink className="md:btn" to="/contact">
            Contact Us
          </NavLink>
        </nav>
      </header>
    </>
  );
}
