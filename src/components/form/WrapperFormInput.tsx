import { useFormContext } from "react-hook-form";

const WrapperFormInput = ({ type, name }: { type: string; name: string }) => {
  const { register } = useFormContext();

  return <input type={type} id={name} {...register(`${name}`)} />;
};

export default WrapperFormInput;
