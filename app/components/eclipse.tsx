import React from "react";
export function Eclipse({
  width,
  height = 10,
  fill = "#0D0D0D",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="5.5" cy="5" r="5" fill={fill} />
    </svg>
  );
}
