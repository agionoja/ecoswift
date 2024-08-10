import starRating from "~/assets/images/star.svg";

export function StarRating({ quantity }: { quantity: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: quantity }).map((_, i) => (
        <img key={i} src={starRating} alt="star" />
      ))}
    </div>
  );
}
