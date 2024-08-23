import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  logout,
  selectCurrentUser,
  useCurrentToken,
} from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};
const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();
  let user;
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  if (token) {
    user = verifyToken(token);
  }

  /*  if (role !== undefined || role !== user?.role) {
    dispatch(logout());
    return <Navigate to={"/login"} replace={true} />;
  } */

  return children;
};

export default ProtectedRoute;
