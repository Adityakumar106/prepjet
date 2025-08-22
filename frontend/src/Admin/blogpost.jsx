// src/admin/Blogs.jsx
import { useState } from "react";

export default function Blogs() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog Submitted:", form);
    // later: send to backend
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-indigo-700">
          Add New Blog
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Blog Title */}
          <div>
            <label className="block text-sm font-semibold mb-1">Blog Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter blog title"
              className="w-full border p-3 rounded focus:ring-2 focus:ring-indigo-400"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Short Description
            </label>
            <textarea
              name="description"
              placeholder="Write a short description..."
              className="w-full border p-3 rounded h-20 focus:ring-2 focus:ring-indigo-400"
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>

          {/* Full Content */}
          <div>
            <label className="block text-sm font-semibold mb-1">Full Content</label>
            <textarea
              name="content"
              placeholder="Write full blog content..."
              className="w-full border p-3 rounded h-40 focus:ring-2 focus:ring-indigo-400"
              value={form.content}
              onChange={handleChange}
              required
            />
          </div>

          {/* Cover Image Upload */}
          <div>
            <label className="block text-sm font-semibold mb-1">Cover Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full border p-2 rounded"
              onChange={handleChange}
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-3 w-40 h-40 object-cover rounded-lg shadow"
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
}
