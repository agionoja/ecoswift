import { Header } from "~/components/header";
import React from "react";
import { Link } from "@remix-run/react";

type Props = {
  bgUrl: string;
  heading: string;
  paragraph: string;
  servicesLink?: string;
  scrollRef?: React.MutableRefObject<HTMLDivElement>;
  icon: string;
  callToAction: string;
};

export function Hero({
  bgUrl,
  scrollRef,
  servicesLink,
  heading,
  icon,
  paragraph,
  callToAction,
}: Props) {
  const handleScroll = () => {
    if (scrollRef?.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `radial-gradient(58.4% 50.45% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%), url(${bgUrl})`,
      }}
      className={`flex-col text-white flex  bg-cover bg-center gap-[4.375rem] bg-no-repeat h-[55vh] md:h-[604px] md:rounded-b-2xl`}
    >
      <Header />
      <div
        className={
          "md:px-4 md:pt-4 flex items-center flex-col gap-4 md:gap-8 w-[80%] lg:w-[60%] text-center mx-auto"
        }
      >
        <h1 className={"text-2xl md:text-5xl font-bold"}>{heading}</h1>
        <p className={"text-xs md:text-[1rem]"}>{paragraph}</p>
        <div>
          {servicesLink && (
            <div className={"flex gap-4 md:gap-8"}>
              <Link className={"flex items-center gap-3"} to={servicesLink}>
                <span>{callToAction}</span>
                <img className={"shrink-0 grow-0"} src={icon} alt="" />
              </Link>
              <Link to={"/contact"} className={"btn text-white bg-secondary"}>
                Contact Us
              </Link>
            </div>
          )}
          {!servicesLink && (
            <button
              onClick={handleScroll}
              className={"flex items-center gap-3"}
            >
              <span>{callToAction}</span>
              <img className={"shrink-0 grow-0"} src={icon} alt="" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
