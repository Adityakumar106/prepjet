import { useState } from "react";
import { Upload, FileText } from "lucide-react";

export default function AddResourcePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload a PDF file.");
      return;
    }
    // TODO: Handle API request to backend
    console.log({
      title,
      description,
      category,
      file,
    });
    alert("Resource uploaded successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
          <FileText className="w-6 h-6 text-blue-600" />
          Add Resource (PDF)
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter resource title"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Enter resource description"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Category</option>
              <option value="notes">Notes</option>
              <option value="guides">Guides</option>
              <option value="previous-papers">Previous Year Papers</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload PDF
            </label>
            <div className="mt-2 flex items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer hover:border-blue-500 transition">
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden"
                id="pdfUpload"
                required
              />
              <label
                htmlFor="pdfUpload"
                className="flex flex-col items-center cursor-pointer"
              >
                <Upload className="w-8 h-8 text-blue-600 mb-2" />
                <span className="text-gray-600 text-sm">
                  {file ? file.name : "Click to upload PDF"}
                </span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Upload Resource
          </button>
        </form>
      </div>
    </div>
  );
}
