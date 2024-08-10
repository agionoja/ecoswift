import React from "react";

export function Card({
  imgUrl,
  component,
  className,
  imgComponent,
}: {
  imgUrl?: string;
  imgComponent?: React.ReactNode;
  component: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex gap-12 md:gap-20 flex-col items-center md:flex-row ${className}`}
    >
      {component}
      {imgUrl && <img src={imgUrl} alt="" />}
      {imgComponent && imgComponent}
    </div>
  );
}
