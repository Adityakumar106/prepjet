// src/admin/AdminLayout.jsx
import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function AdminLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { name: "Blogs", path: "/admin/blogs" },
    { name: "Test Series", path: "/admin/test-series" },
    { name: "Add Resources", path: "/admin/addresource" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-indigo-700 text-white transition-all duration-300 flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-indigo-600">
          <h2
            className={`text-xl font-bold transition-opacity ${
              sidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Admin Panel
          </h2>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white hover:text-gray-200"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? "bg-indigo-600 text-white"
                  : "text-gray-200 hover:bg-indigo-600 hover:text-white"
              }`}
            >
              {sidebarOpen ? item.name : item.name[0]} {/* Show first letter when collapsed */}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Header */}
        <h1 className="font-extrabold text-center text-yellow-600 text-6xl m-30">Welcome to the family of jetprep </h1>
       

        {/* Page Content */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
