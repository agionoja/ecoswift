import { Header } from "~/components/header";
import { Footer } from "~/routes/_landing/footer";
import { Title } from "~/components/title";
import iconPhone from "~/assets/images/icons-phone.svg";
import iconEmail from "~/assets/images/icons-mail.svg";
import { Form } from "@remix-run/react";

export default function Contact() {
  return (
    <div>
      <div className={"md:min-h-screen bg-cover bg-no-repeat md:bg-about-hero"}>
        <div className="general-px flex flex-col md:gap-20 pb-44">
          <Header />

          <div
            className={
              "md:border-4 md:rounded-4xl p-4 md:p-8 bg-transparent-gray-50 flex flex-col gap-8"
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
                Ready to start your design journey with Infisane? Contact us
                today and let’s begin this creative adventure together.
              </p>
            </div>
            <div className={"flex md:gap-16"}>
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
  return (
    <main className={"bg-transparent-gray-30 rounded-4xl w-full md:w-[65%]"}>
      <Form className={"p-8 flex flex-col gap-3.5"}>
        <div className={"flex gap-2"}>
          <input
            type="text"
            name={"name"}
            placeholder={"Your Name *"}
            className={"bg-white w-full md:w-2/6 px-4 py-3"}
          />
          <input
            type="email"
            name={"name"}
            placeholder={"Your Email *"}
            className={"bg-white w-full md:w-2/6 px-4 py-3"}
          />
          <input
            type="tel"
            name={"name"}
            placeholder={"Your Phone *"}
            className={"bg-white w-full md:w-2/6 px-4 py-3"}
          />
        </div>
        <textarea
          placeholder={"Your Message"}
          rows={8}
          className={"w-full px-4 py-3"}
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
        "hidden md:block md:w-[30%] rounded-4xl  p-8 bg-transparent-gray-30"
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
        <img src={icon} alt="Phone icon" />
        <strong>{iconText}</strong>
      </div>
      <p>{text}</p>
      <span>{contact}</span>
    </div>
  );
}
