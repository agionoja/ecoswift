import { StarRating } from "~/routes/_landing._index/ratings";

export function TestimonialCard({
  imgUrl,
  date,
  review,
  name,
  rating,
}: {
  rating: number;
  imgUrl: string;
  date: Date;
  name: string;
  review: string;
}) {
  return (
    <div
      className={
        "relative rounded-lg lg:rounded-4xl p-4 lg:p-0 md:pr-4 overflow-hidden flex flex-col md:flex-row items-center gap-10 shadow-lg w-full md:w-8/12"
      }
    >
      <img
        className={
          "absolute lg:static w-20 right-4 top-4 rounded-full lg:rounded-none h-20 lg:h-[296px] object-cover lg:w-2/6 shrink-0"
        }
        src={imgUrl}
        alt="testimonial"
      />
      <div className={"flex flex-col gap-8"}>
        <div className={"flex flex-col gap-2.5"}>
          <span>{date.toDateString()}</span>
          <StarRating quantity={rating} />
          <h3 className={"text-2xl font-bold"}>{name}</h3>
        </div>
        <p className={"opacity-70 text-sm md:text-lg"}>{review}</p>
      </div>
    </div>
  );
}
