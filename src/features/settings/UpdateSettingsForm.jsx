import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Spinner from "../../ui/Spinner";

import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [field]: value });
  }

  function preventWheelChange(e) {
    e.target.blur();
  }

  return (
    <Form>
      <FormRow label="حداقل شب‌ها در هر رزرو">
        <input
          className="input"
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
          onWheel={preventWheelChange}
        />
      </FormRow>

      <FormRow label="حداکثر شب‌ها در هر رزرو">
        <input
          className="input"
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
          onWheel={preventWheelChange}
        />
      </FormRow>

      <FormRow label="حداکثر مهمان در هر رزرو">
        <input
          className="input"
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
          onWheel={preventWheelChange}
        />
      </FormRow>

      <FormRow label="قیمت صبحانه">
        <input
          className="input"
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          onWheel={preventWheelChange}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
