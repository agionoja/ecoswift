import type { MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/hero";
import servicesHero from "~/assets/images/services-hero.jpg";
import doubleArrowDown from "~/assets/images/material-symbols_more-down.svg";
import { Card } from "~/components/card";
import vehicleShippingImg1 from "~/assets/images/serivces__vehicle-shipping1.png";
import vehicleShipping2 from "~/assets/images/serivces__vehicle-shipping2.png";
import { MoreDetailsCard } from "~/components/more-details-card";
import visionIMg from "~/assets/images/about-us__vision.png";
import machineryImg from "~/assets/images/serivces__machinery-shipping.png";
import { ImagePositionAbsolute1 } from "~/components/imagePositionAbsolute1";
import { ContactUs } from "~/components/contactUs";

export const meta: MetaFunction = () => {
  return [
    { title: "Ecoswift Services" },
    { name: "description", content: "Services we offer" },
  ];
};

export default function About() {
  return (
    <div className={"flex flex-col gap-12 md:gap-28"}>
      <Hero
        bgUrl={servicesHero}
        icon={doubleArrowDown}
        callToAction={"Our Services"}
        heading={"Trusted by Our Customers"}
        paragraph={
          "Find out why our users trust us for reliable, secure, and efficient shipping solutions. Discover our story, values, and unwavering commitment to excellence."
        }
      />

      <div className={"general-px flex flex-col gap-20 md:gap-56"}>
        <Card
          imgComponent={<ImagePositionAbsolute2 />}
          component={
            <MoreDetailsCard
              summary={"Vehicle Shipping"}
              text={
                "Transport your cars and other vehicles safely and securely with our specialized vehicle shipping services. We handle everything from classic cars to modern vehicles with care."
              }
            />
          }
        />{" "}
        <Card
          imgComponent={<ImagePositionAbsolute1 />}
          className={"md:flex-row-reverse"}
          component={
            <MoreDetailsCard
              summary={"Electronics Shipping"}
              text={
                "Ensure the safe delivery of electronics with our tailored shipping solutions. From fragile gadgets to large appliances, we ensure they arrive in perfect condition."
              }
            />
          }
        />
        <Card
          imgComponent={<ImagePositionAbsolute3 />}
          // className={"md:flex-row-reverse"}
          component={
            <MoreDetailsCard
              summary={"Customized Shipping Solutions"}
              text={
                "We offer customized shipping solutions tailored to meet specific customer requirements, ensuring flexibility and efficiency in every shipment."
              }
            />
          }
        />
        <Card
          imgUrl={visionIMg}
          className={"md:flex-row-reverse"}
          component={
            <MoreDetailsCard
              summary={"Customized Shipping Solutions"}
              text={
                "We offer customized shipping solutions tailored to meet specific customer requirements, ensuring flexibility and efficiency in every shipment."
              }
            />
          }
        />
        <ContactUs />
      </div>
    </div>
  );
}

function ImagePositionAbsolute3() {
  return (
    <div className={"shrink-0 relative w-fit"}>
      <img src={vehicleShippingImg1} alt="" />
      <img
        className={"absolute hidden md:inline-block top-14 -left-[15%]"}
        src={machineryImg}
        alt=""
      />
    </div>
  );
}
function ImagePositionAbsolute2() {
  return (
    <div className={"shrink-0 relative w-fit"}>
      <img src={vehicleShippingImg1} alt="" />
      <img
        className={"absolute hidden md:inline-block top-1/2 -left-[15%]"}
        src={vehicleShipping2}
        alt=""
      />
    </div>
  );
}
