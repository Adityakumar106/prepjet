import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, Flag, CheckCircle, Circle, AlertCircle } from "lucide-react";

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
  {
    id: 3,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: 1,
  },
  {
    id: 4,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correct: 3,
  },
  {
    id: 5,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correct: 1,
  },
  // Add more questions here
];

export default function TestAttempt() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 1 hr
  const navigate = useNavigate();
  const [flagged, setFlagged] = useState(new Set());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOptionClick = (index) => {
    setAnswers({ ...answers, [mockQuestions[currentQ].id]: index });
  };

  const handleFlag = () => {
    const newFlagged = new Set(flagged);
    if (newFlagged.has(mockQuestions[currentQ].id)) {
      newFlagged.delete(mockQuestions[currentQ].id);
    } else {
      newFlagged.add(mockQuestions[currentQ].id);
    }
    setFlagged(newFlagged);
  };

  const handleSubmit = () => {
    navigate("/test/result", { state: { answers, questions: mockQuestions } });
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const getQuestionStatus = (questionId) => {
    if (answers[questionId] !== undefined) return 'answered';
    if (flagged.has(questionId)) return 'flagged';
    return 'unanswered';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'answered': return 'bg-green-500 text-white';
      case 'flagged': return 'bg-orange-500 text-white';
      default: return 'bg-gray-200 text-gray-700 hover:bg-gray-300';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'answered': return <CheckCircle className="w-4 h-4" />;
      case 'flagged': return <Flag className="w-4 h-4" />;
      default: return <Circle className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar (Questions Navigation + Timer) */}
      <div className="w-80 bg-white shadow-lg p-6 border-r overflow-y-auto">
        {/* Timer */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-red-600" />
            <span className="font-semibold text-red-800">Time Remaining</span>
          </div>
          <div className="text-2xl font-bold text-red-600">
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Question Stats */}
        <div className="grid grid-cols-3 gap-2 mb-6 text-sm">
          <div className="bg-green-50 p-2 rounded text-center">
            <div className="font-bold text-green-600">
              {Object.keys(answers).length}
            </div>
            <div className="text-green-700">Answered</div>
          </div>
          <div className="bg-orange-50 p-2 rounded text-center">
            <div className="font-bold text-orange-600">
              {flagged.size}
            </div>
            <div className="text-orange-700">Flagged</div>
          </div>
          <div className="bg-gray-50 p-2 rounded text-center">
            <div className="font-bold text-gray-600">
              {mockQuestions.length - Object.keys(answers).length}
            </div>
            <div className="text-gray-700">Remaining</div>
          </div>
        </div>

        {/* Question Navigation */}
        <h3 className="font-semibold mb-3">Question Navigation</h3>
            const status = getQuestionStatus(q.id);
        <div className="grid grid-cols-5 gap-2 mb-6">
          {mockQuestions.map((q, i) => (
            <button
              key={q.id}
                className={`p-2 rounded-lg font-medium transition flex items-center justify-center ${
                  getStatusColor(status)
                } ${currentQ === i ? 'ring-2 ring-blue-500' : ''}`}
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="space-y-2 mb-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span>Answered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-500 rounded"></div>
            <span>Flagged</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 rounded"></div>
            <span>Not Answered</span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition flex items-center justify-center gap-2"
        >
          <AlertCircle className="w-5 h-5" />
          Submit Test
        </button>
      </div>

      {/* Main Question Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* Question Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-800">
                Question {currentQ + 1} of {mockQuestions.length}
              </h1>
              <button
                onClick={handleFlag}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                  flagged.has(mockQuestions[currentQ].id)
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <Flag className="w-4 h-4" />
                {flagged.has(mockQuestions[currentQ].id) ? 'Unflag' : 'Flag'}
              </button>
            </div>
            
            <h2 className="text-xl text-gray-800 leading-relaxed">
              {mockQuestions[currentQ].question}
            </h2>
          </div>

          {/* Options */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Choose the correct answer:</h3>
            <div className="space-y-3">
              {mockQuestions[currentQ].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition ${
                    answers[mockQuestions[currentQ].id] === idx
                      ? "border-blue-500 bg-blue-50 text-blue-800"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      answers[mockQuestions[currentQ].id] === idx
                        ? "border-blue-500 bg-blue-500"
                        : "border-gray-300"
                    }`}>
                      {answers[mockQuestions[currentQ].id] === idx && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="font-medium">
                      {String.fromCharCode(65 + idx)}. {opt}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between">
              <button
                onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
                disabled={currentQ === 0}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                ← Previous
              </button>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setAnswers({ ...answers, [mockQuestions[currentQ].id]: undefined })}
                  className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                >
                  Clear Response
                </button>
                
                <button
                  onClick={() => setCurrentQ(Math.min(mockQuestions.length - 1, currentQ + 1))}
                  disabled={currentQ === mockQuestions.length - 1}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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

