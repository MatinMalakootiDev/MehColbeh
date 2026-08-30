import Button from "./Button";

const ConfirmDelete = ({ resourceName, onConfirm, disabled, onCloseModal }) => {
  return (
    <div className="flex w-full flex-col gap-3 sm:w-xl py-4 px-2">
      <h3>حذف {resourceName}</h3>

      <p className="mb-3 text-neutral-500">
        آیا مطمئن هستید که می‌خواهید کلبه {resourceName} را برای همیشه حذف
        کنید؟ این عملیات قابل بازگشت نیست.
      </p>

      <div className="flex flex-wrap justify-end gap-3">
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          انصراف
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          حذف
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
