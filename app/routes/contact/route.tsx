import { Header } from "~/components/header";
import { Footer } from "~/routes/_landing/footer";
import iconPhone from "~/assets/images/icons-phone.svg";
import iconEmail from "~/assets/images/icons-mail.svg";
import { Form } from "@remix-run/react";
import { useMaxScreen } from "~/hooks/useMaxScreen";

export default function Contact() {
  return (
    <div>
      <div
        className={"md:min-h-screen w-full bg-cover bg-no-repeat bg-about-hero"}
      >
        <div className="general-px w-full flex flex-col gap-20 pb-44">
          <Header />

          <div
            className={
              "border-2 rounded-2xl md:border-4 md:rounded-4xl p-4 md:p-8 bg-transparent-gray-50 flex flex-col gap-8"
            }
          >
            <div
              className={
                "text-center flex flex-col gap-4 items-center md:px-[20%]"
              }
            >
              {/*<Title title={"Contact Us"} />*/}
              <h1 className={"text-[40px] font-semibold"}>Get in Touch</h1>
              <p className={"md:text-[20px]"}>
                Contact us today and experience seamless and secure shipping
              </p>
            </div>
            <div
              className={"flex md:gap-16 flex-col-reverse w-full md:flex-row"}
            >
              <Aside />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ContactForm() {
  const sm = useMaxScreen(450);

  return (
    <main
      className={
        "bg-transparent-gray-30 rounded-2xl md:rounded-4xl w-full md:w-[65%]"
      }
    >
      <Form className={"p-4 md:px-8 flex flex-col gap-3.5"}>
        <div className={"flex gap-2"}>
          <input
            type="text"
            name={"name"}
            minLength={4}
            required
            placeholder={"Your Name *"}
            className={"input"}
          />
          <input
            type="email"
            required
            name={"email"}
            placeholder={"Your Email *"}
            className={"input"}
          />
          <input
            type="tel"
            required
            name={"name"}
            placeholder={"Your Phone *"}
            className={"input"}
          />
        </div>
        <textarea
          required
          minLength={30}
          placeholder={"Your Message"}
          rows={!sm ? 10 : 4}
          className={"w-full input"}
        />
        <button type={"submit"} className={"btn-contact__blue-100 ml-auto"}>
          Send Message
        </button>
      </Form>
    </main>
  );
}

function Aside() {
  return (
    <aside
      className={
        "hidden md:w-[30%] text-xs md:text-lg md:block rounded-2xl md:rounded-4xl  p-2 md:p-8 bg-transparent-gray-30"
      }
    >
      <AsideItem
        icon={iconPhone}
        iconText={"Call To Us"}
        contact={"Phone: +234 (323) 275-1718D"}
        text={
          "Call us for immediate support, inquiries, or to discuss your next project."
        }
      />
      <hr className={"my-10 bg-black"} />
      <AsideItem
        icon={iconEmail}
        iconText={"Write To Us"}
        contact={"Emails: infisane@gmail.com.com"}
        text={
          "Email us for project discussions, or any questions. We're here to help."
        }
      />
    </aside>
  );
}

function AsideItem({
  icon,
  iconText,
  text,
  contact,
}: {
  icon: string;
  iconText: string;
  text: string;
  contact: string;
}) {
  return (
    <div className={"flex flex-col gap-5"}>
      <div className={"flex gap-4"}>
        <img width={30} className={"w-7 md:w-12"} src={icon} alt="Phone icon" />
        <strong>{iconText}</strong>
      </div>
      <p>{text}</p>
      <span>{contact}</span>
    </div>
  );
}
