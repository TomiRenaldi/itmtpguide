import { Shield } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white mb-4 ring-8 ring-indigo-100">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">IT MTP GUIDE</h1>
          <p className="text-gray-600 mt-2">Panduan untuk karyawan baru di divisi IT Support masa depan.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
