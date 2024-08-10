import partnersImg from "~/assets/images/partner.png";
import { MoreDetailsCard } from "~/components/more-details-card";

export function Partners() {
  return (
    <div
      className={
        "flex  flex-col lg:flex-row general-px gap-12 md:gap-20 items-center"
      }
    >
      <div className={"flex flex-col gap-6 grow-0"}>
        <MoreDetailsCard
          title={"Partners"}
          summary={"Join Our Network of Trusted Partners"}
          text={
            "Partner with Kings Ecoswift Shipping Ltd to deliver exceptional shipping services and grow your business. Together, we can achieve excellence in logistics and transportation."
          }
        >
          <button className={"btn-contact__blue-100"}>Contact us</button>
        </MoreDetailsCard>
      </div>
      <img
        className={"w-full lg:w-[35rem] 2xl:w-[50rem]"}
        src={partnersImg}
        alt=""
      />
    </div>
  );
}
