import { useParams, Link } from "react-router-dom";
import { Clock, BookOpen, Award, Users } from "lucide-react";

export default function TestSeriesDetail() {
  const { id } = useParams();

  // Mock purchase state (replace with backend/user data)
  const purchased = true;

  const series = {
    id,
    title: "SSC CGL 2025 Complete Test Series",
    exam: "SSC CGL",
    price: 499,
    originalPrice: 999,
    image: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=800",
    tests: [
      { id: 1, title: "Quantitative Aptitude Test 1", date: "2025-08-20" },
      { id: 2, title: "Reasoning Ability Test 1", date: "2025-08-25" },
      { id: 3, title: "English Language Test 1", date: "2025-08-30" },
      { id: 4, title: "General Awareness Test 1", date: "2025-09-05" },
    ],
    duration: "6 Months",
    description:
      "This SSC CGL test series is designed to help aspirants crack the exam with high accuracy. Includes detailed solutions and performance analysis.",
    features: [
      "50+ Mock Tests",
      "Detailed Solutions",
      "Performance Analytics",
      "All India Ranking",
      "Previous Year Papers",
      "Expert Support"
    ],
    stats: {
      enrolled: 15420,
      rating: 4.8,
      reviews: 2341
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            {/* Image */}
            <div className="md:w-1/3">
              <img
                src={series.image}
                alt={series.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="md:w-2/3 p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {series.exam}
                </span>
                <div className="flex items-center text-yellow-500">
                  <span className="text-sm font-medium">⭐ {series.stats.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">({series.stats.reviews})</span>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{series.title}</h1>
              
              <div className="flex items-center gap-6 mb-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm">{series.tests.length} Tests</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{series.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{series.stats.enrolled.toLocaleString()} enrolled</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-green-600">₹{series.price}</span>
                  <span className="text-lg text-gray-500 line-through">₹{series.originalPrice}</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                    50% OFF
                  </span>
                </div>
              </div>
              
              {!purchased ? (
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 shadow-lg">
                  Buy Now - Start Learning
                </button>
              ) : (
                <div className="flex items-center gap-2 text-green-600">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">Purchased ✓</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">📄 About This Course</h2>
              <p className="text-gray-700 leading-relaxed">{series.description}</p>
            </div>

            {/* Tests */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">📝 Tests Included</h2>
              <div className="space-y-4">
                {series.tests.map((test, index) => (
                  <div
                    key={test.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:shadow-md transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{test.title}</h3>
                        <p className="text-sm text-gray-500">Available from: {test.date}</p>
                      </div>
                    </div>
                    {purchased ? (
                      <Link
                        to={`/test/${series.id}/${test.id}/instructions`}
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
                      >
                        Start Test
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="px-6 py-2 bg-gray-200 text-gray-500 rounded-lg cursor-not-allowed font-medium"
                      >
                        🔒 Locked
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Features */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">✨ What's Included</h3>
              <ul className="space-y-3">
                {series.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">📊 Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Tests</span>
                  <span className="font-semibold">{series.tests.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold">{series.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Students Enrolled</span>
                  <span className="font-semibold">{series.stats.enrolled.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rating</span>
                  <span className="font-semibold">⭐ {series.stats.rating}/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
