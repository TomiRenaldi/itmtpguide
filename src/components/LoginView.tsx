import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/auth";
import { ArrowRight } from "lucide-react";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err: any) {
      alert("Username atau Password salah, coba lagi !");
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <div>
        <div className="block text-sm font-medium text-gray-500 mb-1">
          Email
        </div>
        <div className="relative">
          <input
            id="myEmail"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`block w-full pl-3 pr-3 py-1.5 text-sm rounded-lg border focus:ring-1`}
            placeholder="anonymous@gmail.com"
            required
            autoComplete="on"
          />
          <div className="block text-sm font-medium text-gray-500 mb-1 mt-5">
            Password
          </div>
          <input
            id="myPassword"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`block w-full pl-3 pr-3 py-1.5 text-sm rounded-lg border focus:ring-1`}
            placeholder="Password"
            required
            autoComplete="on"
          />
          <button
            type="submit"
            role="button"
            className="w-full flex mt-8 items-center justify-center gap-2 bg-radial-[at_25%_25%] from-white to-zinc-950 to-75% animate-pulse text-white py-2 rounded-lg font-medium hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors pointer-events-auto"
          >
            Login
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </form>
  );
}
