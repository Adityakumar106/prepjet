
import heroImg from "../assets/easily.png"; // Use the image we made earlier
import { FcLikePlaceholder } from "react-icons/fc";
import Footer from "../components/footer";


export default function HomePage() {
  const isLoggedIn = true; // Replace with your auth state

  const popularTestSeries = [
    { id: 1, title: "UPSC Prelims 2025", desc: "Complete practice set with detailed explanations.", img: FcLikePlaceholder},
    { id: 2, title: "SSC CGL Tier 1", desc: "Mock tests with real exam interface.", img: FcLikePlaceholder},
  ];

  const topResources = [
    { id: 1, title: "UPSC Notes", desc: "Comprehensive, well-structured UPSC notes.", img: FcLikePlaceholder},
    { id: 2, title: "SSC GK Capsule", desc: "Quick revision notes for GK preparation.", img: FcLikePlaceholder},
  ];

  return (
    <div className="font-sans ">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center ">
          {/* Text */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {isLoggedIn
                ? "Welcome back to JetPrep"
                : "Crack Your Dream Exam with JetPrep"}
            </h1>
            <p className="text-lg opacity-90">
              {
                 "Access top-quality mock tests, notes, and learning resources for all competitive exams."}
            </p>
            {!isLoggedIn && (
              <a
                href="/auth"
                className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
              >
                Get Started
              </a>
            )}
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={heroImg}
              alt="JetPrep Hero"
              className="rounded-xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Popular Test Series */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">🔥 Popular Test Series</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTestSeries.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden"
              >
                <img src={item.img} alt={item.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Resources */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">📚 Top Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topResources.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden"
              >
                <img src={item.img} alt={item.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}