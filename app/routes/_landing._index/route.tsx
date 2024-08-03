import type { MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/hero";
import doubleArrowUp from "~/assets/images/double-up-arrow.png";
import homeHero from "~/assets/images/home-hero.png";
import { ServiceCard } from "~/routes/_landing._index/service-card";
import { Title } from "~/components/title";
import stepData from "~/routes/_landing._index/step-data";
import servicesData from "~/routes/_landing._index/service-card-data";
import whyChooseUsData from "~/routes/_landing._index/why-choose-us-data";

import React from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Ecoswift" },
    { name: "description", content: "Welcome to Ecoswift!" },
  ];
};

export default function Index() {
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
        heading={"Key Services"}
        title={"Our Services"}
        text={
          "Discover our reliable and professional shipping solutions for cars, electronics, machinery, and used gadgets"
        }
      >
        <ul
          className={
            "general-px grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 justify-center"
          }
        >
          {servicesData.map((data) => (
            <li key={data.name}>
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
        title={"Our Process"}
        heading={"From Start to Finish"}
        text={
          "Discover the step-by-step journey we take to transform your ideas into exceptional digital experiences."
        }
      >
        <ul className="general-px grid grid-cols-1 md:justify-between lg:grid-cols-2 gap-6 md:gap-8">
          {stepData.map((step) => (
            <li key={step.title}>
              <Step number={step.number} title={step.title} text={step.text} />
            </li>
          ))}
        </ul>
      </X>

      <ChooseUsCard>
        <ul className={"flex flex-col md:flex-row gap-8 px-4 md:general-px"}>
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
    </div>
  );
}

function ChooseUsCard({ children }: { children: React.ReactNode }) {
  return (
    <div style={{}} className={"bg-primary text-white md:rounded-2xl py-12"}>
      <X
        heading={"Why Choose Us"}
        text={
          "Discover why Kings Ecoswift Shipping Ltd is your preferred choice for reliable and efficient shipping solutions."
        }
      >
        {children}
      </X>
    </div>
  );
}

function ChooseUsCardItem({
  icon,
  heading,
  text,
}: {
  icon: string;
  heading: string;
  text: string;
}) {
  return (
    <div className={"flex flex-col gap-4"}>
      <div
        className={
          "bg-secondary w-10 h-10 flex items-center justify-center rounded-xl"
        }
      >
        <img src={icon} alt="" />
      </div>
      <h2 className={"text-[24px] capitalize"}>{heading}</h2>
      <p className={"text-sm"}>{text}</p>
    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: number;
  title: string;
  text: string;
}) {
  return (
    <div className={"flex gap-4 md:gap-6"}>
      <span
        className={
          "text-white rounded-full h-10 w-10 shrink-0 border-4 border-gray-300 bg-black flex justify-center items-center"
        }
      >
        {number}
      </span>
      <div>
        <h3 className={"text-2xl font-semibold"}>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function X({
  children,
  text,
  title,
  heading,
}: {
  children: React.ReactNode;
  title?: string;
  text: string;
  heading: string;
}) {
  return (
    <>
      <div className={"flex flex-col gap-4 md:gap-12"}>
        <div className={"flex flex-col items-center gap-4"}>
          {title && <Title title={title} />}
          <h2 className={"heading-2"}>{heading}</h2>
          <p className={"text-center md:text-left"}>{text}</p>
        </div>
        {children}
      </div>
    </>
  );
}
