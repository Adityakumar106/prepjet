import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/Auth/authslice";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import logoImg from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Test Series", path: "/testseries" },
    { name: "Resources", path: "/resources" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <img src={logoImg} alt="JetPrep Logo" className="h-8 w-8 object-contain" />
            <span className="text-2xl font-bold text-blue-600">JetPrep</span>
          </div>

          {/* Desktop Menu (only if logged in) */}
          {isAuthenticated && (
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-gray-700 hover:text-blue-600 transition font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

          {/* Right Side (Login/Profile) */}
          <div className="hidden md:flex">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 text-sm">Hi, {user?.name || 'User'}</span>
                <a href="/profile" className="text-gray-700 hover:text-blue-600">
                  <FaUserCircle size={28} />
                </a>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-red-600 text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <a
                href="/auth"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                Login / Signup
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          {isAuthenticated && navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {isAuthenticated ? (
            <>
              <a
                href="/profile"
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </a>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <a
              href="/auth"
              className="block px-4 py-3 bg-blue-500 text-white hover:bg-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Login / Signup
            </a>
          )}
        </div>
      )}
    </nav>
  );
}
