import { Link as ScrollLink } from "react-scroll";
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
  return (
    <nav className="bg-black py-1 px-6 border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-20 h-20 mr-4" />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-x-4 md:gap-x-8">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center gap-1 text-white hover:text-yellow-400 cursor-pointer"
          >
            <HousePlus size={18} />
            <span className="hidden md:inline">Home</span>
          </ScrollLink>

          <ScrollLink
            to="card"
            smooth={true}
            duration={700}
            className="flex items-center gap-1 text-white hover:text-yellow-400 cursor-pointer"
          >
            <Laptop size={18} />
            <span className="hidden md:inline">Resources</span>
          </ScrollLink>

          <ScrollLink
            to="team"
            smooth={true}
            duration={700}
            className="flex items-center gap-1 text-white hover:text-yellow-400 cursor-pointer"
          >
            <Users size={18} />
            <span className="hidden md:inline">Team</span>
          </ScrollLink>

          <RouterLink
            to="/blogs"
            className="flex items-center gap-1 text-white hover:text-yellow-400"
          >
            <NotebookTabs size={18} />
            <span className="hidden md:inline">Blogs</span>
          </RouterLink>

          <RouterLink
            to="/events"
            smooth={true}
            duration={500}
            className="flex items-center gap-1 text-white hover:text-yellow-400 cursor-pointer"
          >
            <CalendarClock size={18} />
            <span className="hidden md:inline">Events</span>
          </RouterLink>

          <RouterLink
            to="/contact"
            smooth={true}
            duration={500}
            className="flex items-center gap-1 text-white hover:text-yellow-400 cursor-pointer"
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
