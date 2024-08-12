import { IconItem } from "~/components/iconItem";
import React from "react";

export function ValueCard({
  icon,
  summary,
  text,
}: {
  icon: string;
  summary: string;
  text: string;
}) {
  return (
    <div
      className={
        "shadow-lg rounded-lg text-center gap-4 p-10 w-full flex flex-col items-center"
      }
    >
      <IconItem icon={icon} />
      <h3 className={"text-[2rem]"}>{summary}</h3>
      <p>{text}</p>
    </div>
  );
}
