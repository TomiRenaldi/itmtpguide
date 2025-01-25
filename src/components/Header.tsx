interface HeaderProps {
  toggleSidebar: () => void
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dokumentasi</h1>
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
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
    </header>
  )
}
