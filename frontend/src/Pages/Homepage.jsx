
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import heroImg from "../assets/easily.png"; // Use the image we made earlier
import { BookOpen, Award, Users, TrendingUp } from "lucide-react";
import Footer from "../components/footer";


export default function HomePage() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const popularTestSeries = [
    { 
      id: 1, 
      title: "UPSC Prelims 2025", 
      desc: "Complete practice set with detailed explanations.", 
      img: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: 999,
      tests: 50
    },
    { 
      id: 2, 
      title: "SSC CGL Tier 1", 
      desc: "Mock tests with real exam interface.", 
      img: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: 499,
      tests: 30
    },
    { 
      id: 3, 
      title: "JEE Main 2025", 
      desc: "Comprehensive test series for JEE preparation.", 
      img: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: 799,
      tests: 40
    },
  ];

  const topResources = [
    { 
      id: 1, 
      title: "UPSC Notes", 
      desc: "Comprehensive, well-structured UPSC notes.", 
      img: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      id: 2, 
      title: "SSC GK Capsule", 
      desc: "Quick revision notes for GK preparation.", 
      img: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      id: 3, 
      title: "Previous Year Papers", 
      desc: "Collection of previous year question papers.", 
      img: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
  ];

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Quality Content",
      desc: "Expert-curated study materials and mock tests"
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: "Proven Results",
      desc: "Thousands of successful candidates"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Community Support",
      desc: "Join a community of like-minded aspirants"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      title: "Performance Analytics",
      desc: "Detailed analysis to track your progress"
    }
  ];

  return (
    <div className="font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          {/* Text */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {isAuthenticated
                ? "Welcome back to JetPrep"
                : "Crack Your Dream Exam with JetPrep"}
            </h1>
            <p className="text-lg opacity-90">
              Access top-quality mock tests, notes, and learning resources for all competitive exams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {!isAuthenticated && (
                <Link
                  to="/auth"
                  className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
                >
                  Get Started Free
                </Link>
              )}
              <Link
                to="/testseries"
                className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition transform hover:scale-105"
              >
                Explore Test Series
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src={heroImg}
              alt="JetPrep Hero"
              className="rounded-2xl shadow-2xl w-full object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose JetPrep?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Test Series */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">🔥 Popular Test Series</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of successful candidates who cracked their exams with our comprehensive test series
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTestSeries.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="h-48 w-full object-cover hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.tests} Tests
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">₹{item.price}</span>
                    <Link
                      to={`/test-series/${item.id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/testseries"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
            >
              View All Test Series
            </Link>
          </div>
        </div>
      </section>

      {/* Top Resources */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">📚 Top Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access premium study materials, notes, and resources curated by experts
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topResources.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="h-48 w-full object-cover hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                  <Link
                    to="/resources"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition"
                  >
                    Access Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/resources"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
            >
              Explore All Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-200">Happy Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Mock Tests</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}