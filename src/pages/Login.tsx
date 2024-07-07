import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import authAPi from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import WrapperForm from "../components/form/WrapperForm";
import WrapperFormInput from "../components/form/WrapperFormInput";

const Login = () => {
  const [login] = authAPi.useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();

      const user = verifyToken(res?.data?.accessToken) as TUser;

      dispatch(
        setUser({
          user: user,
          token: res?.data?.accessToken,
        })
      );
      toast.success("Log in successful", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("Something went wrong during login", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
      <WrapperForm onSubmit={onSubmit}>
        <div>
          {/* <input type="text" id="id" {...register("id")} /> */}
          <WrapperFormInput type="text" name="userId" label="ID: " />
        </div>
        <div>
          {/* <input type="text" id="password" {...register("password")} /> */}
          <WrapperFormInput type="text" name="password" label="Password " />
        </div>
        <Button htmlType="submit">Login</Button>
      </WrapperForm>
    </Row>
  );
};

export default Login;
