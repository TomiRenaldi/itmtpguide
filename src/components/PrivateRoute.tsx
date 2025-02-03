import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/auth";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const [user] = useAuthState(auth);
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;