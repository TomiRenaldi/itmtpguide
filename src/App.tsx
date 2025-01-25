import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Intro from "./pages/Intro";
import Informasi from "./pages/Informasi";
import Tips from "./pages/Tips";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header toggleSidebar ={toggleSidebar} />
        <div className="flex flex-1">
          <Sidebar isOpen={sidebarOpen} toggleSidebar ={toggleSidebar}/>
          <main className="flex-1 p-4 md:ml-64">
            <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="/informasi" element={<Informasi />} />
              <Route path="/tips" element={<Tips />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
