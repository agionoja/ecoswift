import type { MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/hero";
import doubleArrowDown from "~/assets/images/material-symbols_more-down.svg";
import aboutHero from "~/assets/images/about-hero.png";
import missionImg from "~/assets/images/about-us__mission.png";
import visionIMg from "~/assets/images/about-us__vision.png";
import { MoreDetailsCard } from "~/components/more-details-card";
import valuesData from "~/routes/_landing.about/valuesData";
import { ValueCard } from "~/routes/_landing.about/valueCard";
import { Card } from "~/components/card";
import { ContactUs } from "~/components/contactUs";
import { Values } from "~/routes/_landing.about/values";
import { ImagePositionAbsolute1 } from "~/components/imagePositionAbsolute1";

export const meta: MetaFunction = () => {
  return [
    { title: "About Ecoswift" },
    { name: "description", content: "About Ecoswift" },
  ];
};

export default function About() {
  return (
    <div className={"flex flex-col gap-12 md:gap-28"}>
      <Hero
        bgUrl={aboutHero}
        icon={doubleArrowDown}
        callToAction={"Our Services"}
        heading={"Trusted by Our Customers"}
        paragraph={
          "Find out why our users trust us for reliable, secure, and efficient shipping solutions. Discover our story, values, and unwavering commitment to excellence."
        }
      />
      <div className="general-px flex flex-col gap-20 md:gap-56">
        <Card
          imgComponent={<ImagePositionAbsolute1 />}
          // imgUrl={historyImg}
          component={
            <MoreDetailsCard
              summary={"How it All Began"}
              title={"Our Story"}
              text={
                "Founded with a vision for excellence in shipping services, Kings Ecoswift Shipping Ltd has emerged as a trusted name in the industry. Established [insert year], we have grown steadily, focusing on delivering exceptional service and ensuring the safe and timely delivery of goods for our diverse clientele."
              }
            />
          }
        />{" "}
        <Card
          imgUrl={missionImg}
          className={"md:flex-row-reverse"}
          component={
            <MoreDetailsCard
              summary={"Our Mission"}
              title={"Mission"}
              text={
                "At Kings Ecoswift Shipping Ltd, our mission is to provide efficient, reliable, and secure shipping solutions tailored to meet the diverse needs of individuals and businesses. We aim to exceed customer expectations by delivering their goods with care and precision, backed by a commitment to professionalism and trustworthiness."
              }
            />
          }
        />{" "}
        <Card
          imgUrl={visionIMg}
          component={
            <MoreDetailsCard
              summary={"Our Vision"}
              title={"Vision"}
              text={
                "Our vision is to be the leading provider of shipping solutions known for our reliability, customer-centric approach, and operational excellence. We strive to innovate and adapt to changing industry demands while maintaining our core values of integrity and quality service."
              }
            />
          }
        />
        <div className={"flex flex-col gap-8"}>
          <Values />
          <ul
            className={"flex w-full justify-between flex-wrap gap-4 md:gap-12p"}
          >
            {valuesData.map((value, index) => (
              <li key={index} className={"shrink-0  w-full md:w-[30%]"}>
                <ValueCard
                  icon={value.icon}
                  summary={value.summary}
                  text={value.text}
                />{" "}
              </li>
            ))}
          </ul>
        </div>
        <ContactUs />
      </div>
    </div>
  );
}
