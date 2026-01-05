// import { useState } from 'react'
// import { MdMenu, MdClose, MdDashboard, MdWork, MdAssessment, MdCalendarToday, MdDescription, MdLightMode, MdDarkMode } from "react-icons/md";
// import './App.css'

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   const [darkMode, setDarkMode] = useState(false)

//   const navItems = [
//   { name: "Dashboard", icon: MdDashboard },
//   { name: "Projects", icon: MdWork },
//   { name: "Calender", icon: MdCalendarToday },
//   { name: "Documents", icon: MdDescription },
//   { name: "Reports", icon: MdAssessment },
// ];

// return (
//     <>
//       <div className={`bg-gray-100 flex h-screen ${darkMode ? "dark" : ""} dark:bg-gray-900`}>

//         {/* sidebar */}
//         <div className={`fixed bg-white w-64 h-screen shadow ${ sidebarOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0 lg:static dark:bg-gray-900 `}>
//           <div className="p-4 flex justify-between border-b">
//             <div className="text-xl font-bold dark:text-gray-100">Logo</div>
//             <button className="lg:hidden dark:text-gray-100" onClick={() => setSidebarOpen(false)}><MdClose className="text-3xl"/></button>
//           </div>
          
//           {/* nav bar */}
//           <div className="p-4 space-y-2">
//             {navItems.map((item, index) => {
//               return (
//                 <div key={index} className="flex items-center dark:text-gray-100 dark:hover:text-gray-900 gap-3 p-2 hover:bg-gray-100">
//                   <item.icon className="text-xl" />
//                   <span>{item.name}</span>
//                 </div>
//               );
//             })}
//           </div>

//           {/* darkmode button */}
//           <div className="flex text-2xl justify-left p-4">
//             {darkMode ? (
//               <button className="p-2 bg-black rounded-full" onClick={() => setDarkMode(false)}> <MdLightMode className="text-2xl text-yellow-400" /></button>
//             ) : (
//               <button className="p-2 bg-black rounded-full" onClick={() => setDarkMode(true)}> <MdDarkMode className="text-2xl text-yellow-400" /></button>
//             )}
//           </div>

//         </div>

//         {/* main content */}
//         <main className="flex-1">
//           <header className="bg-white flex justify-between p-3 dark:bg-gray-900">
//             <button className="text-xl p-2 font-bold lg:hidden dark:text-gray-100" onClick={() => setSidebarOpen(true)}><MdMenu className="text-3xl" /></button>
//             <h1 className="text-2xl font-bold dark:text-gray-100">Dashboard</h1>
//             <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
//           </header>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">

//              {/* all cards */}
//              <div className="bg-white p-6 shadow-lg rounded-lg dark:bg-gray-800">
//               <h2 className="text-xl font-bold dark:text-gray-100">Card</h2>
//               <p className="text-md p-1 text-gray-700 dark:text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione officiis eveniet aperiam non, dignissimos doloribus ex necessitatibus.</p>
//              </div>

//              <div className="bg-white p-6 shadow-lg rounded-lg dark:bg-gray-800">
//               <h2 className="text-xl font-bold dark:text-gray-100">Card</h2>
//               <p className="text-md p-1 text-gray-700 dark:text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione officiis eveniet aperiam non, dignissimos doloribus ex necessitatibus.</p>
//              </div>

//              <div className="bg-white p-6 shadow-lg rounded-lg dark:bg-gray-800">
//               <h2 className="text-xl font-bold dark:text-gray-100">Card</h2>
//               <p className="text-md p-1 text-gray-700 dark:text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione officiis eveniet aperiam non, dignissimos doloribus ex necessitatibus.</p>
//              </div>

//           </div>
//         </main>
//       </div>
//     </>
//   )
// }

// export default App


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Calendar from "./pages/Calendar";
import Documents from "./pages/Documents";
import Reports from "./pages/Reports";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex-1">
          <Navbar setSidebarOpen={setSidebarOpen} title="Dashboard" />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
