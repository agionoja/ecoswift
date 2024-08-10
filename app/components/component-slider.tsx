import React, { useCallback, useEffect, useState } from "react";
import ArrowLeft from "~/assets/images/arrow-left.svg";
import ArrowRight from "~/assets/images/arrow-right.svg";
import Eclipse from "~/assets/images/Ellipse .svg";

type Props = {
  components: React.ReactNode[];
};

export function ComponentSlider({ components }: Props) {
  const [componentIndex, setComponentIndex] = useState(0);

  const prevComponent = useCallback(() => {
    setComponentIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1,
    );
  }, [components.length]);

  const nextComponent = useCallback(() => {
    setComponentIndex((prevIndex) =>
      prevIndex === components.length - 1 ? 0 : prevIndex + 1,
    );
  }, [components.length]);

  useEffect(() => {
    const timerId = setInterval(nextComponent, 4000);
    return () => clearInterval(timerId);
  }, [nextComponent]);

  return (
    <div className={"w-full h-full flex flex-col gap-4"}>
      <div className="w-full overflow-hidden md:overflow-x-auto no-scrollbar rounded-4xl">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${componentIndex * 100}%)` }}
        >
          {components.map((component, index) => (
            <div className="shrink-0 w-full" key={index}>
              {component}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-12">
        <button onClick={prevComponent} className={"hidden md:inline-block"}>
          <img src={ArrowLeft} alt="" />
        </button>
        <div className={"flex gap-4"}>
          {components.map((_, index) => (
            <button
              onClick={() => setComponentIndex(index)}
              className={"shrink-0"}
              key={index}
            >
              <span
                className={`h-3 w-3 transition duration-300 ease-in-out md:h-4 md:w-4 rounded-full block ${index === componentIndex ? "bg-secondary" : "bg-black"}`}
              ></span>
            </button>
          ))}
        </div>
        <button onClick={nextComponent} className={"hidden md:inline-block"}>
          <img src={ArrowRight} alt="" />
        </button>
      </div>
    </div>
  );
}
