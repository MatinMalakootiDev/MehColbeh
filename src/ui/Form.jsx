import { cva } from "class-variance-authority";

const formStyles = cva("text-sm", {
  variants: {
    type: {
      regular:
        "overflow-hidden rounded-md border border-neutral-100 bg-neutral-0 px-6 py-8 sm:px-16 sm:py-10",
      modal: "px-5 py-8 sm:px-10 sm:py-10",
    },
  },
  defaultVariants: {
    type: "regular",
  },
});

const Form = ({ type, className, children, ...props }) => {
  return (
    <form className={formStyles({ type, className })} {...props}>
      {children}
    </form>
  );
};

export default Form;
