import logoWhite from "~/assets/images/logo-white.svg";
import { Link } from "@remix-run/react";
import { FaFacebookSquare, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import favIcon from "../../../public/favicon.ico";

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
          {/*<li>*/}
          {/*  <Link to={"/"}>For customers</Link>*/}
          {/*</li>*/}
          <li>
            <Link to={"/services"}>Our Services</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className={"flex flex-col gap-8"}>
        <strong className={"opacity-40"}>Socials</strong>
        <ul className={"flex flex-col gap-2"}>
          <li>
            <a
              className={"socials"}
              href={"https://wa.me/+31616909843"}
              target={"_blank"}
              rel="noreferrer"
            >
              <FaWhatsapp /> <span>+31616909843</span>
            </a>
          </li>
          <li>
            <a
              className={"socials"}
              href={"mailto:Kingsecoswift@ffasterservice.com"}
            >
              <MdOutlineEmail /> <span>Kingsecoswift@ffasterservice.com</span>
            </a>
          </li>
          <li>
            <Link className={"socials"} to={""}>
              <FaFacebookSquare /> <span>Kingsecoswiftltd</span>
            </Link>
          </li>
          <li>
            <Link className={"socials"} to={"#"}>
              <FaInstagram /> <span>kings_ecoswift_shipping_ltd</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={"flex flex-col gap-8"}>
        <strong className={"opacity-40"}>FIND US </strong>
        <address>Johnvrouw Sanderijndreed, Utrecht, Netherland</address>
        {/*<span>Everyday from 10am to 8pm</span>*/}
      </div>
    </footer>
  );
}
