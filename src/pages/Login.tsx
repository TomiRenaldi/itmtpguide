import { LogIn, Shield, UserPlus } from "lucide-react";
import { useState } from "react";
import LoginView from "../components/LoginView";
import RegisterView from "../components/RegisterView";
import PrivateRoute from "../components/PrivateRoute";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center">
            <img src="./src/assets/Logos.png" className="w-28 h-20" alt="" />
          </div>
          <h1 className="text-2xl font-bold text-black">IT MTP GUIDE</h1>
          <p className="text-center text-xs text-black">
          by Tomi Renaldi IT-PT.MTP
        </p>
        </div>

        <div className="bg-white border-2 border-solid rounded-2xl p-6">
          <div className="flex gap-1 bg-gray-100 border-1 border-solid p-1 rounded-lg mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-md font-medium transition-all ${
                isLogin
                  ? "bg-white text-gray-500 shadow-sm"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <LogIn size={15} />
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-md font-medium transition-all ${
                !isLogin
                  ? "bg-white text-gray-500 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <UserPlus size={15} />
              Register
            </button>
          </div>

          {isLogin ? <LoginView /> : <PrivateRoute><RegisterView /></PrivateRoute>}
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-8">
          Situs ini di enkripsi ketat dan aktivitas login dapat dideteksi kapan saja.
        </p>
      </div>
    </div>
  );
};

export default Login;
