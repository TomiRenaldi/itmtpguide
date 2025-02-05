import { LogIn, Shield, UserPlus } from "lucide-react";
import { useState } from "react";
import LoginView from "../components/LoginView";
import RegisterView from "../components/RegisterView";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white mb-4 ring-8 ring-indigo-100">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">IT MTP GUIDE</h1>
          <p className="text-gray-600 mt-2">Panduan untuk karyawan baru di divisi IT Support PT.Muara Toba Persada.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg mb-8">
            <button onClick={() => setIsLogin(true)} className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md font-medium transition-all ${isLogin ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}>
              <LogIn size={18} />
              Login
            </button>
            <button onClick={() => setIsLogin(false)} className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md font-medium transition-all ${!isLogin ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}>
              <UserPlus size={18} />
              Register
            </button>
          </div>

          {isLogin ? <LoginView /> : <RegisterView />}
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-8">
          Proteksi keamanan dan di enkripsi ketat
          <br />
          dilakukan oleh pembuat website ini.
        </p>
      </div>
    </div>
  );
};

export default Login;
