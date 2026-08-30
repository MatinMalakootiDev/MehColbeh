const FormRow = ({ className = "", children, label, error }) => {
  return (
    <div
      className={`
        grid grid-cols-1 items-start gap-2 font-semibold
        sm:grid-cols-[14rem_1fr] sm:items-center sm:gap-4
        py-3 sm:py-4
        first:pt-0
        last:pb-0
        not-last:border-b not-last:border-neutral-100
        has-[button]:flex has-[button]:flex-wrap
        has-[button]:justify-end has-[button]:gap-3
        ${className}
      `}
    >
      {label && <label htmlFor={children.props?.id}>{label}</label>}
      {children}
      {error && <span className="text-sm font-normal text-r-700">{error}</span>}
    </div>
  );
};

export default FormRow;
