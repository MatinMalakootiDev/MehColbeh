import { useSearchParams } from "react-router-dom";
import clsx from "clsx";

const Filter = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  const handleClick = (value) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex flex-wrap gap-1 rounded-sm border border-neutral-100 bg-neutral-0 p-1 shadow-sm">
      {options.map((option) => {
        const isActive = option.value === currentFilter;

        return (
          <button
            key={option.value}
            onClick={() => handleClick(option.value)}
            disabled={isActive}
            className={clsx(
              "rounded-sm px-2.5 py-2 text-xs font-medium transition-all duration-300 not-disabled:hover:bg-brand-600 not-disabled:hover:text-brand-50",
              isActive
                ? "bg-brand-600 text-brand-50"
                : "bg-neutral-0 text-neutral-700",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
