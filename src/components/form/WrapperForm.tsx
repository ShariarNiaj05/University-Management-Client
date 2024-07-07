import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  defaultValues: {
    id: string;
    password: string;
  };
};

const WrapperForm = ({ onSubmit, children, defaultValues }: TFormProps) => {
  const formConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  const methods = useForm({ formConfig });

  return (
    <FormProvider {...methods}>
      <form onClick={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default WrapperForm;
