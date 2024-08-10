export function IconItem({ icon }: { icon: string }) {
  return (
    <div
      className={
        "bg-[#B0D0C0] border border-[#EAECF0] w-10 h-10 flex items-center justify-center rounded-xl"
      }
    >
      <img src={icon} alt="" />
    </div>
  );
}
