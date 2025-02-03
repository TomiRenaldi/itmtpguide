import { signOut } from "firebase/auth";
import { auth } from "../services/auth";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome Home</h1>
      <Link to="/intro">Intro</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;