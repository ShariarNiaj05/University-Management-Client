import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

type TData = {
  id: string;
  password: string;
};
const Login = () => {
  const [login, { data, error }] = useLoginMutation();

  console.log({ data }, { error });
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });
  const onSubmit = (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };

    login(userInfo);
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">id: </label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">password: </label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
