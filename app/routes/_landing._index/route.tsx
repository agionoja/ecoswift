import type { MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/hero";
import doubleArrowUp from "~/assets/images/double-up-arrow.png";
import homeHero from "~/assets/images/home-hero.png";
import { ServiceCard } from "~/routes/_landing._index/service-card";
import stepData from "~/routes/_landing._index/step-data";
import servicesData from "~/routes/_landing._index/service-card-data";
import whyChooseUsData from "~/routes/_landing._index/why-choose-us-data";

import { Step } from "~/routes/_landing._index/step";
import { X } from "~/routes/_landing._index/x";
import { ChooseUsCardItem } from "~/routes/_landing._index/chooseUsCardItem";
import { ChooseUsCard } from "~/routes/_landing._index/chooseUsCard";
import { Partners } from "~/routes/_landing._index/partners";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Ecoswift" },
    { name: "description", content: "Welcome to Ecoswift!" },
  ];
};

export default function Index() {
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);
  return (
    <div className={"flex flex-col gap-12 md:gap-36"}>
      <Hero
        bgUrl={homeHero}
        icon={doubleArrowUp}
        callToAction={"Our Services"}
        heading={"Swift shipping solutions for every journey"}
        servicesLink={"/services"}
        paragraph={
          "Experience seamless and secure shipping for your vehicles, electronics, machinery, and more with Kings Ecoswift Shipping Ltd. Delivering your goods with precision and care"
        }
      />
      <X
        className={"general-px"}
        heading={"Key Services"}
        title={"Our Services"}
        text={
          "Discover our reliable and professional shipping solutions for cars, electronics, machinery, and used gadgets"
        }
      >
        <ul
          className={
            "flex flex-col lg:flex-row gap-4 md:gap-6 justify-between w-full"
          }
        >
          {servicesData.map((data) => (
            <li className={"w-full lg:w-2/6"} key={data.name}>
              <ServiceCard
                imgUrl={data.imgUrl}
                name={data.name}
                summary={data.summary}
                text={data.text}
              />
            </li>
          ))}
        </ul>
      </X>

      <X
        className={"general-px"}
        title={"Our Process"}
        heading={"From Start to Finish"}
        text={
          "Discover the step-by-step journey we take to transform your ideas into exceptional digital experiences."
        }
      >
        <ul className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 md:gap-12 justify-center lg:justify-between">
          {stepData.map((step) => {
            return (
              <li className={"w-fit"} key={step.title}>
                <Step
                  number={step.number}
                  title={step.title}
                  text={step.text}
                />
              </li>
            );
          })}
        </ul>
      </X>

      <ChooseUsCard>
        <ul className={"flex flex-col md:flex-row gap-8"}>
          {whyChooseUsData.map((data) => (
            <li key={data.heading}>
              <ChooseUsCardItem
                icon={data.icon}
                heading={data.heading}
                text={data.text}
              />
            </li>
          ))}
        </ul>
      </ChooseUsCard>
      <Partners />
    </div>
  );
}
