import { MdDashboard, MdWork, MdAssessment, MdCalendarToday, MdDescription, MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/", icon: MdDashboard },
  { name: "Projects", path: "/projects", icon: MdWork },
  { name: "Calendar", path: "/calendar", icon: MdCalendarToday },
  { name: "Documents", path: "/documents", icon: MdDescription },
  { name: "Reports", path: "/reports", icon: MdAssessment },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className={`fixed bg-white w-64 h-screen shadow 
      ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} 
      lg:translate-x-0 lg:static dark:bg-gray-900`}>

      <div className="p-4 text-xl font-bold dark:text-white">
        Logo
      </div>
      {/* <button className="lg:hidden dark:text-gray-100" onClick={() => setSidebarOpen(false)}><MdClose className="text-3xl"/></button> */}

      <div className="p-4 space-y-2">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded 
              ${isActive ? "bg-gray-200 dark:bg-gray-700" : "hover:bg-gray-100"} 
              dark:text-white`
            }
          >
            <item.icon className="text-xl" />
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
