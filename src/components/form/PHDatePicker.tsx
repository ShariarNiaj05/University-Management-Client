import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

const PHDatePicker = ({ name, label }) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <DatePicker {...field} size="large" style={{ width: "100%" }} />
        </Form.Item>
      )}
    />
  );
};

export default PHDatePicker;
