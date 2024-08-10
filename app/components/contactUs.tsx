import { Link } from "@remix-run/react";
import React from "react";

export function ContactUs() {
  return (
    <div
      className={"flex items-center flex-col px-4 md:px-20 text-center gap-6"}
    >
      <h2 className={"heading-2"}>Contact Us</h2>
      <p className={"text-sm md:text-xl"}>
        Interested in learning more about our shipping services? Have specific
        shipping needs or inquiries? Contact us today to speak with our team.
        We're here to assist you!
      </p>
      <Link to={"/contact"} className={"btn-contact__blue-100"}>
        Contact Us
      </Link>
    </div>
  );
}
