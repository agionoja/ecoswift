import { Title } from "~/components/title";
import React from "react";

type Prop = {
  title?: string;
  summary: string;
  text: string;
  children?: React.ReactNode;
};

export function MoreDetailsCard({ title, summary, text, children }: Prop) {
  return (
    <div className={"flex flex-col gap-6 grow-0"}>
      {title && <Title title={title} />}
      <h2 className={"heading-2"}>{summary}</h2>
      <p className={"opacity-70"}>{text}</p>
      {children}
    </div>
  );
}
