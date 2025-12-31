import { useNavigate, useLocation } from "react-router";
import { Link as RouterLink } from "react-router";
import {
  HousePlus,
  Laptop,
  NotebookTabs,
  Users,
  CalendarClock,
  Send,
  LogIn,
  UserPlus,
  LogOut,
} from "lucide-react";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollNav = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
   <nav className="bg-black py-2 px-6 border-b border-gray-800 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-16 h-16 mr-3" />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 md:gap-6 text-white font-medium">
          <button
            onClick={() => handleScrollNav("home")}
            className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
          >
            <HousePlus size={18} />
            <span className="hidden md:inline">Home</span>
          </button>

          <button
            onClick={() => handleScrollNav("card")}
            className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
          >
            <Laptop size={18} />
            <span className="hidden md:inline">Resources</span>
          </button>

          <button
            onClick={() => handleScrollNav("team")}
            className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
          >
            <Users size={18} />
            <span className="hidden md:inline">Team</span>
          </button>

          <RouterLink
            to="/blogs"
            className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
          >
            <NotebookTabs size={18} />
            <span className="hidden md:inline">Blogs</span>
          </RouterLink>

          <RouterLink
            to="/events"
            className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
          >
            <CalendarClock size={18} />
            <span className="hidden md:inline">Events</span>
          </RouterLink>

          <RouterLink
            to="/contact"
            className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
          >
            <Send size={18} />
            <span className="hidden md:inline">Contact</span>
          </RouterLink>

          {/* Auth Buttons */}
          {/* <div className="flex items-center gap-3 mt-2 sm:mt-0">
            {!user ? (
              <>
                <RouterLink
                  to="/login"
                  className="flex items-center gap-1 px-3 py-1 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all"
                >
                  <LogIn size={16} />
                  <span className="hidden sm:inline">Login</span>
                </RouterLink>
                <RouterLink
                  to="/signup"
                  className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-400 text-black hover:bg-yellow-300 transition-all"
                >
                  <UserPlus size={16} />
                  <span className="hidden sm:inline">Sign Up</span>
                </RouterLink>
              </>
            ) : (
              <button
                onClick={logout}
                className="flex items-center gap-1 px-3 py-1 rounded-full border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all"
              >
                <LogOut size={16} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            )}
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
