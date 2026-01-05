import { MdMenu } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Navbar = ({ setSidebarOpen }) => {
  const location = useLocation();

  const pageTitles = {
    "/": "Dashboard",
    "/projects": "Projects",
    "/calendar": "Calendar",
    "/documents": "Documents",
    "/reports": "Reports",
  };

  const title = pageTitles[location.pathname] || "Dashboard";

  return (
    <header className="bg-white flex justify-between p-3 dark:bg-gray-900">
      <button
        className="lg:hidden dark:text-white"
        onClick={() => setSidebarOpen(true)}
      >
        <MdMenu className="text-3xl" />
      </button>

      <h1 className="text-2xl font-bold dark:text-white">
        {title}
      </h1>

      <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
    </header>
  );
};

export default Navbar;
