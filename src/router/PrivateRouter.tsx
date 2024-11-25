import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../app/store";

const PrivateRouter = () => {
  const { email } = useSelector((state: RootState) => state.auth);
  return email ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
