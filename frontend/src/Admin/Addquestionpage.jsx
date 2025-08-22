// src/admin/AddQuestion.jsx
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function AddQuestion() {
  const { seriesId } = useParams(); // series id from URL

  const [form, setForm] = useState({
    type: "mcq", // "mcq" or "short"
    question: "",
    image: null,
    options: ["", "", "", ""],
    correctAnswer: "",
  });

  const [questions, setQuestions] = useState([]);

  // Handle option change
  const handleOptionChange = (index, value) => {
    const newOptions = [...form.options];
    newOptions[index] = value;
    setForm({ ...form, options: newOptions });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: file });
    }
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.question.trim() && !form.image) {
      alert("Please add a question text or image!");
      return;
    }

    if (form.type === "mcq" && !form.correctAnswer) {
      alert("Please select the correct answer!");
      return;
    }
    if (form.type === "short" && !form.correctAnswer.trim()) {
      alert("Please provide the correct text answer!");
      return;
    }

    const newQuestion = {
      id: Date.now(),
      ...form,
      imagePreview: form.image ? URL.createObjectURL(form.image) : null,
    };

    setQuestions([...questions, newQuestion]);

    // Reset form
    setForm({
      type: "mcq",
      question: "",
      image: null,
      options: ["", "", "", ""],
      correctAnswer: "",
    });
  };

  const handleDelete = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-xl font-bold mb-4">
        Add Question (Series ID: {seriesId})
      </h1>

      {/* Add Question Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Question Type */}
        <select
          className="w-full border p-2 rounded"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="mcq">Multiple Choice Question</option>
          <option value="short">Short Answer Question</option>
        </select>

        {/* Question Text */}
        <textarea
          placeholder="Enter question"
          className="w-full border p-2 rounded"
          value={form.question}
          onChange={(e) => setForm({ ...form, question: e.target.value })}
        />

        {/* Image Upload */}
        <div>
          <label className="block mb-1 font-medium">Upload Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border p-2 rounded"
          />
          {form.image && (
            <img
              src={URL.createObjectURL(form.image)}
              alt="Preview"
              className="mt-2 w-40 h-40 object-cover rounded"
            />
          )}
        </div>

        {/* MCQ Options */}
        {form.type === "mcq" && (
          <>
            <div className="grid grid-cols-2 gap-4">
              {form.options.map((opt, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  className="w-full border p-2 rounded"
                  value={opt}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                />
              ))}
            </div>

            {/* Correct Answer Dropdown */}
            <select
              className="w-full border p-2 rounded"
              value={form.correctAnswer}
              onChange={(e) =>
                setForm({ ...form, correctAnswer: e.target.value })
              }
            >
              <option value="">Select Correct Answer</option>
              {form.options.map((opt, index) =>
                opt ? (
                  <option key={index} value={opt}>
                    {opt}
                  </option>
                ) : null
              )}
            </select>
          </>
        )}

        {/* Short Answer */}
        {form.type === "short" && (
          <input
            type="text"
            placeholder="Enter correct answer"
            className="w-full border p-2 rounded"
            value={form.correctAnswer}
            onChange={(e) =>
              setForm({ ...form, correctAnswer: e.target.value })
            }
          />
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Add Question
        </button>
      </form>

      {/* Show Saved Questions */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Questions in this Series</h2>
        {questions.length === 0 ? (
          <p className="text-gray-500 mt-2">No questions added yet.</p>
        ) : (
          <ul className="mt-2 space-y-3">
            {questions.map((q) => (
              <li key={q.id} className="border p-3 rounded">
                <p className="font-medium">{q.question}</p>

                {/* Show Image */}
                {q.imagePreview && (
                  <img
                    src={q.imagePreview}
                    alt="Question"
                    className="mt-2 w-40 h-40 object-cover rounded"
                  />
                )}

                {/* MCQ options */}
                {q.type === "mcq" && (
                  <ul className="list-disc list-inside text-sm mt-1">
                    {q.options.map((opt, i) => (
                      <li
                        key={i}
                        className={
                          opt === q.correctAnswer
                            ? "text-green-600 font-semibold"
                            : ""
                        }
                      >
                        {opt}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Short answer */}
                {q.type === "short" && (
                  <p className="mt-1 text-sm">
                    ✅ Correct Answer:{" "}
                    <span className="text-green-600 font-semibold">
                      {q.correctAnswer}
                    </span>
                  </p>
                )}

                <button
                  onClick={() => handleDelete(q.id)}
                  className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
