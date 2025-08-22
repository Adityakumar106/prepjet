import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function ResourcesPage() {
  const exams = [
    "All Exams",
    "UPSC Civil Services",
    "SSC CGL",
    "SSC CHSL",
    "Bank PO",
    "Bank Clerk",
    "Railway NTPC",
    "Defence (NDA/CDS)",
    "State PSC",
    "GATE",
    "NEET",
    "JEE Main",
    "JEE Advanced",
    "Other Exams"
  ];

  const allResources = [
    { title: "SSC CGL Tier-1 Previous Year Papers", exam: "SSC CGL", type: "PDF", link: "#" },
    { title: "UPSC GS Notes - Polity", exam: "UPSC Civil Services", type: "PDF", link: "#" },
    { title: "Bank PO Quantitative Aptitude Guide", exam: "Bank PO", type: "PDF", link: "#" },
    { title: "Railway NTPC Mock Papers", exam: "Railway NTPC", type: "PDF", link: "#" },
    { title: "GATE Mechanical Engg. Formulas", exam: "GATE", type: "PDF", link: "#" },
  ];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All Exams");

  const filteredResources = allResources.filter(
    (res) =>
      (filter === "All Exams" || res.exam === filter) &&
      res.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">📚 Resources</h1>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search Bar */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-500" size={20} />
          </div>

          {/* Filter Dropdown */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {exams.map((exam, index) => (
              <option key={index} value={exam}>
                {exam}
              </option>
            ))}
          </select>
        </div>

        {/* Resources List */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((res, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition"
              >
                <h2 className="font-semibold text-lg text-gray-800">{res.title}</h2>
                <p className="text-sm text-gray-500">{res.exam} • {res.type}</p>
                <a
                  href={res.link}
                  className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition"
                >
                  View Resource
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-10">No resources found.</p>
        )}

      </div>
    </div>
  );
}
