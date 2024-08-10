import { Title } from "~/components/title";
import React from "react";

export function Values() {
  return (
    <div
      className={"flex items-center flex-col px-4 md:px-20 text-center gap-6"}
    >
      <Title title={"Our Values"} />
      <h3>Our Values</h3>
      <div className="text-sm md:text-xl">
        Our core principles guide everything we do, driving us to deliver
        exceptional design solutions with creativity, innovation, and integrity.
      </div>
    </div>
  );
}
