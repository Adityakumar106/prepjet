export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-white">JetPrep</h3>
          <p className="text-sm mt-4 leading-6">
            Crack your dream exam with our mock tests, expert-curated resources, and structured preparation plans.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/testseries" className="hover:text-white transition">Test Series</a></li>
            <li><a href="/resources" className="hover:text-white transition">Resources</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
          <ul className="space-y-3">
            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/blogs" className="hover:text-white transition">Blog</a></li>
          </ul>
        </div>

    </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} JetPrep. All rights reserved.
      </div>
    </footer>
  );
}
