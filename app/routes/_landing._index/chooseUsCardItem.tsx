export function ChooseUsCardItem({
  icon,
  heading,
  text,
}: {
  icon: string;
  heading: string;
  text: string;
}) {
  return (
    <div className={"flex flex-col gap-4"}>
      <div
        className={
          "bg-[#B0D0C0] border border-[#EAECF0] w-10 h-10 flex items-center justify-center rounded-xl"
        }
      >
        <img src={icon} alt="" />
      </div>
      <h2 className={"text-[24px] capitalize"}>{heading}</h2>
      <p className={"text-sm"}>{text}</p>
    </div>
  );
}
