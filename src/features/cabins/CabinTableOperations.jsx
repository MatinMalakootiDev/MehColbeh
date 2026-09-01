import Filter from "../../ui/Filter";

const CabinTableOperations = () => {
  return (
    <div className="flex items-center gap-5">
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "همه" },
          { value: "no-discount", label: "بدون تخفیف" },
          { value: "with-discount", label: "دارای تخفیف" },
        ]}
      />
    </div>
  );
};

export default CabinTableOperations;
