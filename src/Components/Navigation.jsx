
import { useNavigate, useLocation } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import {
  HousePlus,
  Laptop,
  NotebookTabs,
  Users,
  CalendarClock,
  Send,
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
    <nav className="bg-black py-1 px-6 border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-20 h-20 mr-4" />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-x-4 md:gap-x-8">
          <button
            onClick={() => handleScrollNav("home")}
            className="flex items-center gap-1 text-white hover:text-yellow-400"
          >
            <HousePlus size={18} />
            <span className="hidden md:inline">Home</span>
          </button>

          <button
            onClick={() => handleScrollNav("card")}
            className="flex items-center gap-1 text-white hover:text-yellow-400"
          >
            <Laptop size={18} />
            <span className="hidden md:inline">Resources</span>
          </button>

          <button
            onClick={() => handleScrollNav("team")}
            className="flex items-center gap-1 text-white hover:text-yellow-400"
          >
            <Users size={18} />
            <span className="hidden md:inline">Team</span>
          </button>

          <RouterLink
            to="/blogs"
            className="flex items-center gap-1 text-white hover:text-yellow-400"
          >
            <NotebookTabs size={18} />
            <span className="hidden md:inline">Blogs</span>
          </RouterLink>

          <RouterLink
            to="/events"
            className="flex items-center gap-1 text-white hover:text-yellow-400"
          >
            <CalendarClock size={18} />
            <span className="hidden md:inline">Events</span>
          </RouterLink>

          <RouterLink
            to="/contact"
            className="flex items-center gap-1 text-white hover:text-yellow-400"
          >
            <Send size={18} />
            <span className="hidden md:inline">Contact</span>
          </RouterLink>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
