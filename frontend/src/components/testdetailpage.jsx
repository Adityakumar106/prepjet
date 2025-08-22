import { useParams, Link } from "react-router-dom";

export default function TestSeriesDetail() {
  const { id } = useParams();

  // Mock purchase state (replace with backend/user data)
  const purchased = true;

  const series = {
    id,
    title: "SSC CGL 2025 Complete Test Series",
    exam: "SSC CGL",
    price: 499,
    tests: [
      { id: 1, title: "Quantitative Aptitude Test 1", date: "2025-08-20" },
      { id: 2, title: "Reasoning Ability Test 1", date: "2025-08-25" },
      { id: 3, title: "English Language Test 1", date: "2025-08-30" },
      { id: 4, title: "General Awareness Test 1", date: "2025-09-05" },
    ],
    duration: "6 Months",
    description:
      "This SSC CGL test series is designed to help aspirants crack the exam with high accuracy. Includes detailed solutions and performance analysis.",
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800">{series.title}</h1>
        <p className="text-gray-500">{series.exam}</p>
        <p className="mt-2 font-bold text-blue-600">₹{series.price}</p>
        <p className="text-sm text-gray-600">
          {series.tests.length} Tests • {series.duration}
        </p>

        {/* Description */}
        <h2 className="mt-5 text-lg font-semibold">📄 Description</h2>
        <p className="text-gray-700 mt-2">{series.description}</p>

        {/* Tests */}
        <h2 className="mt-5 text-lg font-semibold">📝 Tests Included</h2>
        <ul className="mt-3 space-y-3">
          {series.tests.map((test) => (
            <li
              key={test.id}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border hover:shadow"
            >
              <div>
                <h3 className="font-medium text-gray-800">{test.title}</h3>
                <p className="text-sm text-gray-500">Date: {test.date}</p>
              </div>
              {purchased ? (
                <Link
                  to={`/test/${series.id}/${test.id}/instructions`}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                  Start Test
                </Link>
              ) : (
                <button
                  disabled
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg cursor-not-allowed"
                >
                  🔒 Locked
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Buy Button */}
        {!purchased && (
          <button className="mt-6 w-full bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition">
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
}
