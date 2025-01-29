import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <aside
      className={`
          fixed top-0 left-0 z-30 h-screen w-96 sm:w-50 bg-gray-50 p-5 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0
        `}
    >
      <div className="flex justify-between items-center mb-4 md:hidden">
        <h2 className="text-2xl font-semibold">Praktik Terbaik</h2>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            className="w-7 h-7"
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
      <nav> 
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="block hover:bg-gray-200 p-2 rounded"
              onClick={toggleSidebar}
            >
              Intro
            </Link>
          </li>
          <li>
            <Link
              to="/informasi"
              className="block hover:bg-gray-200 p-2 rounded"
              onClick={toggleSidebar}
            >
              Informasi
            </Link>
          </li>
          <li>
            <Link
              to="/tips"
              className="block hover:bg-gray-200 p-2 rounded"
              onClick={toggleSidebar}
            >
              Tips
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
