export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
      <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
        At <span className="font-semibold">JetPrep</span>, we believe that every student has the
        potential to achieve greatness. Our mission is to provide high-quality
        exam preparation resources, mock tests, and expert guidance to help
        aspirants crack competitive exams like UPSC, JEE, SSC, and more.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Our Mission</h3>
          <p className="text-gray-600">
            To make exam preparation accessible, efficient, and stress-free for students across
            India through innovative technology and expert-curated content.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Our Vision</h3>
          <p className="text-gray-600">
            To be the go-to platform for competitive exam aspirants, where they
            can find everything they need to succeed in one place.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Why Choose Us</h3>
          <p className="text-gray-600">
            We offer expert-designed mock tests, up-to-date study materials,
            and 24/7 community support so you’re never alone in your preparation journey.
          </p>
        </div>
      </div>
    </div>
  );
}
