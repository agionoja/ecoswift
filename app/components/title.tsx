export function Title({ title }: { title: string }) {
  return (
    <span
      style={{
        background:
          "linear-gradient(to right, #B0D6FF, #54A7FF, rgba(1, 0, 102, 0))",
      }}
      className={
        "font-semibold text-white capitalize py-2 text-center w-32 h-10 rounded-lg"
      }
    >
      {title}
    </span>
  );
}
