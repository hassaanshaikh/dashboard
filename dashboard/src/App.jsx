import { useState } from 'react'
import { MdMenu, MdClose, MdDashboard, MdWork, MdAssessment, MdCalendarToday, MdDescription } from "react-icons/md";
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navItems = [
  { name: "Dashboard", icon: MdDashboard },
  { name: "Projects", icon: MdWork },
  { name: "Calender", icon: MdCalendarToday },
  { name: "Documents", icon: MdDescription },
  { name: "Reports", icon: MdAssessment },
];

return (
    <>
      <div className="bg-gray-100 flex h-screen">

        {/* sidebar */}
        <div className={`fixed bg-white w-64 h-screen shadow ${ sidebarOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0 lg:static `}>
          <div className="p-4 flex justify-between border-b">
            <div className="text-xl font-bold">Logo</div>
            <button className="lg:hidden" onClick={() => setSidebarOpen(false)}><MdClose className="text-3xl"/></button>
          </div>
          
          {/* nav bar */}


        </div>

        {/* main content */}
        <main className="flex-1">
          <header className="bg-white flex justify-between p-4">
            <button className="text-xl p-2 font-bold lg:hidden" onClick={() => setSidebarOpen(true)}><MdMenu className="text-3xl" /></button>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
          </header>
        </main>
      </div>
    </>
  )
}

export default App
