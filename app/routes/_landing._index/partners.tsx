import { Title } from "~/components/title";
import partnersImg from "~/assets/images/partner.png";

export function Partners() {
  return (
    <div
      className={
        "flex  flex-col lg:flex-row general-px gap-12 md:gap-20 items-center"
      }
    >
      <div className={"flex flex-col gap-6 grow-0"}>
        <Title title={"Partners"} />
        <h2 className={"heading-2"}>Join Our Network of Trusted Partners</h2>
        <p className={""}>
          Partner with Kings Ecoswift Shipping Ltd to deliver exceptional
          shipping services and grow your business. Together, we can achieve
          excellence in logistics and transportation.
        </p>
        <button className={"btn-contact__blue-100"}>Contact us</button>
      </div>
      <img
        className={"w-full lg:w-[35rem] 2xl:w-[50rem]"}
        src={partnersImg}
        alt=""
      />
    </div>
  );
}
