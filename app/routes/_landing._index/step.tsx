export function Step({
  number,
  title,
  text,
}: {
  number: number;
  title: string;
  text: string;
}) {
  return (
    <div className={"flex gap-4 md:gap-6"}>
      <span
        className={
          "text-white rounded-full h-10 w-10 shrink-0 border-4 border-gray-300 bg-black flex justify-center items-center"
        }
      >
        {number}
      </span>
      <div>
        <h3 className={"text-2xl font-semibold"}>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
