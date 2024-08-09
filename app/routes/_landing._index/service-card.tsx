export function ServiceCard({
  imgUrl,
  name,
  text,
  summary,
}: {
  imgUrl: string;
  name: string;
  summary: string;
  text: string;
}) {
  return (
    <div className={"p-4 rounded-lg flex flex-col gap-2 shadow-lg w-full"}>
      <img
        height={100}
        width={100}
        src={imgUrl}
        className={
          "border-[5px] border-neutral-blue rounded-full md:w-24 md:h-24 w-20 h-20"
        }
        alt="A flying Cargo"
      />
      <h2 className={"text-2xl font-semibold"}>{name}</h2>
      <h3 className={"font-semibold"}>{summary}</h3>
      <p className={"text-sm"}>{text}</p>
    </div>
  );
}
