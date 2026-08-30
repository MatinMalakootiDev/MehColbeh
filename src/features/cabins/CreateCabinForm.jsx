import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";

import { useForm } from "react-hook-form";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

// prevent change number while scroll
const preventWheelChange = (e) => e.target.blur();

const CreateCabinForm = ({ cabinToEdit = {}, onCloseModal }) => {
  const { createCabin, isCreating } = useCreateCabin();
  const { editCabin, isEditing } = useEditCabin();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    else
      createCabin(
        { ...data, image },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
  };

  return (
    <Form type={onCloseModal ? "modal" : "regular"} onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="نام کلبه" error={errors?.name?.message}>
        <input
          className="input"
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "این فیلد الزامی است",
          })}
        />
      </FormRow>

      <FormRow label="حداکثر ظرفیت" error={errors?.maxCapacity?.message}>
        <input
          className="input"
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          onWheel={preventWheelChange}
          {...register("maxCapacity", {
            required: "این فیلد الزامی است",
            valueAsNumber: true,
            min: {
              value: 1,
              message: "ظرفیت باید حداقل ۱ باشد",
            },
          })}
        />
      </FormRow>

      <FormRow label="قیمت (ریال)" error={errors?.regularPrice?.message}>
        <input
          className="input"
          type="number"
          id="regularPrice"
          disabled={isWorking}
          onWheel={preventWheelChange}
          {...register("regularPrice", {
            required: "این فیلد الزامی است",
            valueAsNumber: true,
            min: {
              value: 1,
              message: "قیمت باید حداقل ۱ باشد",
            },
          })}
        />
      </FormRow>

      <FormRow label="تخفیف" error={errors?.discount?.message}>
        <input
          className="input"
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          onWheel={preventWheelChange}
          {...register("discount", {
            required: "این فیلد الزامی است",
            valueAsNumber: true,
            validate: (value) =>
              value <= getValues().regularPrice ||
              "مقدار تخفیف باید کمتر از قیمت باشد",
          })}
        />
      </FormRow>

      <FormRow label="توضیحات برای سایت" error={errors?.description?.message}>
        <textarea
          className="text-area"
          id="description"
          defaultValue=""
          disabled={isWorking}
          {...register("description", {
            required: "این فیلد الزامی است",
          })}
        />
      </FormRow>

      <FormRow label="عکس کلبه" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          disabled={isWorking}
          {...register("image", {
            required: isEditSession ? false : "این فیلد الزامی است",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          disabled={isWorking}
          onClick={() => onCloseModal?.()}
        >
          لغو
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "ویرایش کلبه" : "ایجاد کلبه جدید"}
        </Button>
      </FormRow>
    </Form>
  );
};

export default CreateCabinForm;
