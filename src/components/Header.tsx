import { useLocation } from "react-router-dom";

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  const location = useLocation()
  
   // Jangan tampilkan sidebar saat login atau register
   if(location.pathname === "/login" || location.pathname === "/register") {
    return null
  }

  return (
    <div className="flex items-center justify-between">
      <button
        onClick={toggleSidebar}
        className="md:hidden p-5 rounded-md"
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
}
