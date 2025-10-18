import { Link } from "react-router-dom";
import "../../tailwind.css";

const NavBar = () => {
  return (
    <nav className="sticky top-0 bg-gray-100 shadow px-4 py-3 z-50 overflow-x-auto">
      <div className="flex gap-8 whitespace-nowrap">
        <Link to="/" className="text-lg text-gray-700 hover:text-blue-500">
          Home
        </Link>
        <Link to="/about" className="text-lg text-gray-700 hover:text-blue-500">
          About
        </Link>
        <Link
          to="/contact"
          className="text-lg text-gray-700 hover:text-blue-500"
        >
          Contact
        </Link>
        {/* Add more links */}
      </div>
    </nav>
  );
};

export default NavBar;
