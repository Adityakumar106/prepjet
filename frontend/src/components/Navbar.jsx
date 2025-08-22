import { useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import logoImg from "../assets/logo.png";

export default function Navbar() {
    
  const [isOpen, setIsOpen] = useState(false);

  // Simulate logged in status (replace with real auth logic)
  const isLoggedIn = true; // change to true after login

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Test Series", path: "/testseries" },
    { name: "Resources", path: "/resources" },
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
          {isLoggedIn && (
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
            {isLoggedIn ? (
              <a href="/profile" className="text-gray-700 hover:text-blue-600">
                <FaUserCircle size={28} />
              </a>
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
          {isLoggedIn && navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {isLoggedIn ? (
            <a
              href="/profile"
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </a>
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
