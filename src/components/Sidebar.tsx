import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../services/auth";
import { signOut } from "firebase/auth";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [user] = useAuthState(auth)

  // Jangan tampilkan sidebar saat login atau register
  if(location.pathname === "/login" || location.pathname === "/register") {
    return null
  }

  const handleLogout = async () => {
    await signOut(auth)
    navigate('/login')
  }

  return (
    <aside
      className={`
          fixed top-0 left-0 z-30 h-screen w-90 sm:w-70 bg-amber-100 p-5 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0
        `}
    >
      <div className="flex justify-between items-center mb-2 md:hidden">
        <h2 className="text-2xl font-semibold">Praktik Terbaik</h2>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-0.5 leading-none">
        <span className="font-semibold text-sm">IT MTP <a className="text-blue-600">Guide</a></span>
        <span className="text-xs">v0.1.0a300125-alpha</span>
      </div>
      <nav className="mt-5">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="block hover:bg-gray-100 p-1 rounded focus:outline-2 focus:outline-offset-2 focus:outline-blue-800 active:bg-gray-200"
              onClick={toggleSidebar}
            >
              Intro
            </Link>
          </li>
          <li>
            <Link
              to="/informasi"
              className="block hover:bg-gray-100 p-1 rounded focus:outline-2 focus:outline-offset-2 focus:outline-blue-800 active:bg-gray-200"
              onClick={toggleSidebar}
            >
              Informasi
            </Link>
          </li>
          <li>
            <Link
              to="/tips"
              className="block hover:bg-gray-100 p-1 rounded focus:outline-2 focus:outline-offset-2 focus:outline-blue-800 active:bg-gray-200"
              onClick={toggleSidebar}
            >
              Tips
            </Link>
          </li>
          {user && <button className="block hover:bg-gray-100 p-1 rounded focus:outline-2 focus:outline-offset-2 focus:outline-blue-800 active:bg-gray-200" onClick={handleLogout}>Logout</button>}
        </ul>
      </nav>
    </aside>
  );
}
