import { useState } from "react";

export default function TestSeriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterExam, setFilterExam] = useState("All");

  const [testSeries] = useState([
    {
      id: 1,
      title: "SSC CGL 2025 Complete Test Series",
      exam: "SSC CGL",
      price: 499,
      tests: 50,
      image: "https://via.placeholder.com/300x180",
    },{
    id: 4,
      title: "neet test series",
      exam: "neet",
      price: 1099,
      tests: 50,
      image: "https://via.placeholder.com/300x180",},
    {
      id: 2,
      title: "UPSC Prelims + Mains 2025",
      exam: "UPSC Civil Services",
      price: 999,
      tests: 80,
      image: "https://via.placeholder.com/300x180",
    },
    {
      id: 3,
      title: "Bank PO Full Mock Series",
      exam: "Bank PO",
      price: 399,
      tests: 40,
      image: "https://via.placeholder.com/300x180",
    },
  ]);

  // Filtered & searched data
  const filteredSeries = testSeries.filter((series) => {
    const matchesSearch =
      series.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      series.exam.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filterExam === "All" || series.exam === filterExam;

    return matchesSearch && matchesFilter;
  });

  // Extract unique exam types for dropdown
  const examOptions = ["All", ...new Set(testSeries.map((s) => s.exam))];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">📝 Test Series</h1>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="🔍 Search test series..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />

          <select
            value={filterExam}
            onChange={(e) => setFilterExam(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          >
            {examOptions.map((exam, index) => (
              <option key={index} value={exam}>
                {exam}
              </option>
            ))}
          </select>
        </div>

        {/* Cards */}
        {filteredSeries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSeries.map((series) => (
              <div
                key={series.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={series.image}
                  alt={series.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="font-semibold text-lg text-gray-800">
                    {series.title}
                  </h2>
                  <p className="text-sm text-gray-500">{series.exam}</p>
                  <p className="mt-2 text-sm text-gray-600">
                    {series.tests} Tests
                  </p>
                  <p className="mt-1 font-bold text-blue-600">₹{series.price}</p>
                  <a
                    href={`/test-series/${series.id}`}
                    className="mt-3 inline-block w-full bg-blue-500 text-white py-2 rounded-lg text-center font-medium hover:bg-blue-600 transition"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No test series found.</p>
        )}
      </div>
    </div>
  );
}
