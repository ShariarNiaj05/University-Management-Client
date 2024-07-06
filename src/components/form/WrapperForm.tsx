import { FieldValues, FormProvider, useForm } from "react-hook-form";

const WrapperForm = ({ onSubmit, children }: FieldValues) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onClick={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default WrapperForm;
