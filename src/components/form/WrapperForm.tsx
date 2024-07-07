import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
};
type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const WrapperForm = ({ onSubmit, children, defaultValues }: TFormProps) => {
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  const methods = useForm(formConfig);

  return (
    <FormProvider {...methods}>
      <form onClick={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default WrapperForm;
