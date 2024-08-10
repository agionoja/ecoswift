import { IconItem } from "~/components/iconItem";

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
      <IconItem icon={icon} />
      <h2 className={"text-[24px] capitalize"}>{heading}</h2>
      <p className={"text-sm"}>{text}</p>
    </div>
  );
}
