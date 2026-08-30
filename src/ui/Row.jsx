import clsx from "clsx";

function Row({ type = "vertical", children }) {
  return (
    <div
      className={clsx(
        "flex",
        {
          "justify-between items-center": type === "horizontal",
          "flex-col gap-6": type === "vertical",
        },
      )}
    >
      {children}
    </div>
  );
}

export default Row;
