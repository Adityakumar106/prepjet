import { useParams, Link } from "react-router-dom";

const blogData = {
  1: {
    title: "How to Crack UPSC in First Attempt",
    date: "August 14, 2025",
    image: "/images/upsc-blog.jpg",
    content: `
      UPSC is one of the toughest exams in India. To crack it on the first attempt, you need a clear plan.
      Start with understanding the syllabus, then make a timetable, and focus on answer writing practice.
      Also, revise regularly and take mock tests.
    `,
  },
  2: {
    title: "Top Resources for JEE Mains 2025",
    date: "August 10, 2025",
    image: "/images/jee-blog.jpg",
    content: `
      For JEE Mains 2025, NCERT books are a must. Along with that, follow standard books like HC Verma
      for Physics, RD Sharma for Maths, and OP Tandon for Chemistry. Practice previous year papers and
      take online mock tests regularly.
    `,
  },
  3: {
    title: "SSC CGL Tier 1 – Last Month Strategy",
    date: "August 5, 2025",
    image: "/images/ssc-blog.jpg",
    content: `
      The last month before SSC CGL Tier 1 is crucial. Focus on accuracy, speed, and time management.
      Revise important formulas, attempt daily mock tests, and analyse mistakes to improve.
    `,
  },
};

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) return <p className="text-center py-20 text-gray-500">Blog not found</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 pt-20 py-12">
      <Link to="/blogs" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">← Back to Blogs</Link>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{blog.date}</p>
      <img src={blog.image} alt={blog.title} className="w-full h-72 object-cover rounded-lg mb-6" />
      <div className="text-gray-700 leading-8 whitespace-pre-line">{blog.content}</div>
    </div>
  );
}
