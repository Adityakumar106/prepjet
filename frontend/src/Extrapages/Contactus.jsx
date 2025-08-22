export default function ContactUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Have questions, suggestions, or feedback? We’d love to hear from you!
      </p>

      <form className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12 text-center text-gray-600">
        <p>Email: support@jetprep.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: 123 JetPrep Street, New Delhi, India</p>
      </div>
    </div>
  );
}
