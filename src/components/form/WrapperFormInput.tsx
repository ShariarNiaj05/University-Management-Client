import { Input } from "antd";
import { useFormContext } from "react-hook-form";

const WrapperFormInput = ({
  type,
  name,
  label,
}: {
  type: string;
  name: string;
  label: string;
}) => {
  const { register } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Input type={type} id={name} {...register(`${name}`)} />
    </>
  );
};

export default WrapperFormInput;
