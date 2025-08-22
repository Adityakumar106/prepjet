import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "How to Crack UPSC in First Attempt",
    excerpt:
      "A detailed preparation guide with tips, subject strategies, and daily schedules for aspirants.",
    image: "/images/upsc-blog.jpg",
    date: "August 14, 2025",
  },
  {
    id: 2,
    title: "Top Resources for JEE Mains 2025",
    excerpt:
      "Best books, mock tests, and online resources to ace your JEE Mains exam.",
    image: "/images/jee-blog.jpg",
    date: "August 10, 2025",
  },
  {
    id: 3,
    title: "SSC CGL Tier 1 – Last Month Strategy",
    excerpt:
      "Boost your Tier 1 score with these quick revision tips and mock test analysis.",
    image: "/images/ssc-blog.jpg",
    date: "August 5, 2025",
  },
];

export default function BlogsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-5 text-center">
        Exam Prep Blogs
      </h1>

      {/* Blogs Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <p className="text-gray-500 text-sm">{blog.date}</p>
              <h2 className="text-lg sm:text-xl font-bold mt-2 text-gray-800">
                {blog.title}
              </h2>
              <p className="text-gray-600 mt-3 text-sm sm:text-base flex-1">
                {blog.excerpt}
              </p>
              <Link
                to={`/blogs/${blog.id}`}
                className="inline-block mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

