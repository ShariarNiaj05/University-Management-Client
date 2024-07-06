import { FieldValues, useForm } from "react-hook-form";

const WrapperForm = ({ onSubmit, children }: FieldValues) => {
  const { handleSubmit } = useForm();

  return <form onClick={handleSubmit(onSubmit)}>{children}</form>;
};

export default WrapperForm;
