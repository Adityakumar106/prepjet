import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const mockQuestions = [
  {
    id: 1,
    question: "What is 2 + 2?",
    options: ["2", "3", "4", "5"],
    correct: 2,
  },
  {
    id: 2,
    question: "The capital of India is?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    correct: 1,
  },
  // Add more questions here
];

export default function TestAttempt() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 1 hr
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOptionClick = (index) => {
    setAnswers({ ...answers, [mockQuestions[currentQ].id]: index });
  };

  const handleSubmit = () => {
    navigate("/test/result", { state: { answers, questions: mockQuestions } });
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex min-h-screen ">
      {/* Sidebar (Questions Navigation + Timer) */}
      <div className="w-1/4 bg-gray-100 p-4 border-r">
        <h2 className="font-bold text-lg mb-2">
          Time Left: {formatTime(timeLeft)}
        </h2>
        <div className="grid grid-cols-5 gap-2">
          {mockQuestions.map((q, i) => (
            <button
              key={q.id}
              onClick={() => setCurrentQ(i)}
              className={`p-2 rounded ${
                answers[q.id] !== undefined
                  ? "bg-green-300"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded font-semibold hover:bg-red-600 transition"
        >
          Submit Test
        </button>
      </div>

      {/* Main Question Area */}
      <div className="flex-1 p-8">
        <h2 className="text-xl font-semibold">
          Q{currentQ + 1}. {mockQuestions[currentQ].question}
        </h2>
        <div className="mt-4 space-y-3">
          {mockQuestions[currentQ].options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionClick(idx)}
              className={`w-full py-2 px-4 rounded border text-left ${
                answers[mockQuestions[currentQ].id] === idx
                  ? "bg-blue-500 text-white"
                  : "bg-white hover:bg-gray-200"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

