import React from "react";
import { X } from "~/routes/_landing._index/x";

export function ChooseUsCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{}}
      className={
        "bg-primary text-white md:rounded-2xl py-12 flex flex-col gap-12 general-px"
      }
    >
      <X
        heading={"Why Choose Us"}
        text={
          "Discover why Kings Ecoswift Shipping Ltd is your preferred choice for reliable and efficient shipping solutions."
        }
      >
        {children}
      </X>
      <button className={"btn-contact__blue-100 md:ml-auto mr-auto"}>
        Contact Us
      </button>
    </div>
  );
}
