import type { MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/hero";
import doubleArrowDown from "~/assets/images/material-symbols_more-down.svg";
import aboutHero from "~/assets/images/about-hero.png";
export const meta: MetaFunction = () => {
  return [
    { title: "About Ecoswift" },
    { name: "description", content: "About Ecoswift" },
  ];
};

export default function About() {
  return (
    <>
      <Hero
        bgUrl={aboutHero}
        icon={doubleArrowDown}
        callToAction={"Our Services"}
        heading={"Trusted by Our Customers"}
        paragraph={
          "Find out why our users trust us for reliable, secure, and efficient shipping solutions. Discover our story, values, and unwavering commitment to excellence."
        }
      />
    </>
  );
}
