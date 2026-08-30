import { cva } from "class-variance-authority";

const buttonStyles = cva(
  "border-none rounded-sm shadow-sm transition-colors duration-300",
  {
    variants: {
      size: {
        small: "text-xs px-3 py-1.5 uppercase font-semibold text-center",
        medium: "text-sm px-4 py-3 font-medium",
        large: "text-base px-6 py-3 font-medium",
      },
      variation: {
        primary: "text-brand-50 bg-brand-600 hover:bg-brand-700",
        secondary:
          "text-neutral-600 bg-neutral-0 border border-neutral-200 hover:bg-neutral-100",
        danger: "text-r-100 bg-r-700 hover:bg-r-800",
      },
    },
    defaultVariants: {
      size: "medium",
      variation: "primary",
    },
  }
);

const Button = ({ size, variation, className, children, ...props }) => {
  return (
    <button
      className={buttonStyles({ size, variation, className })}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
