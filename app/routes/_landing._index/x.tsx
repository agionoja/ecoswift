import React from "react";
import { Title } from "~/components/title";

export function X({
  children,
  text,
  title,
  heading,
  className,
}: {
  children: React.ReactNode;
  title?: string;
  text: string;
  heading: string;
  className?: string;
}) {
  return (
    <>
      <div className={`flex flex-col gap-4 md:gap-12 ${className}`}>
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
