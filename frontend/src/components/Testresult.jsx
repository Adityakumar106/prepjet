import { useLocation, useNavigate } from "react-router-dom";
import { Trophy, Target, Clock, TrendingUp, Award, Home } from "lucide-react";

export default function TestResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const { answers, questions } = location.state || { answers: {}, questions: [] };

  // calculate score
  const result = questions.reduce(
    (acc, q) => {
      const userAns = answers[q.id];
      if (userAns !== undefined) {
        acc.attempted++;
        if (userAns === q.correct) acc.correct++;
        else acc.wrong++;
      }
      return acc;
    },
    { correct: 0, wrong: 0, attempted: 0 }
  );
  result.score = result.correct * 4 - result.wrong; // +4, -1 marking
  result.total = questions.length;

  // mock leaderboard data
  const leaderboard = [
    { name: "Aditya", score: 250 },
    { name: "Riya", score: 230 },
    { name: "Karan", score: 210 },
    { name: "You", score: result.score },
  ].sort((a, b) => b.score - a.score);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Test Completed! 🎉</h1>
          <p className="text-gray-600">Here's how you performed</p>
        </div>

        {/* Score Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-1">{result.score}</div>
            <div className="text-gray-600 text-sm">Total Score</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-600 mb-1">{result.correct}</div>
            <div className="text-gray-600 text-sm">Correct Answers</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-red-600 mb-1">{result.wrong}</div>
            <div className="text-gray-600 text-sm">Wrong Answers</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-gray-600" />
            </div>
            <div className="text-3xl font-bold text-gray-600 mb-1">{result.attempted}</div>
            <div className="text-gray-600 text-sm">Attempted</div>
          </div>
        </div>
          {questions.map((q, idx) => {
            const userAns = answers[q.id];
            return (
              <div
                key={q.id}
                className="p-4 border rounded-lg bg-gray-50"
              >
                <p className="font-medium">Q{idx + 1}. {q.question}</p>
                <div className="ml-4 mt-2 space-y-1">
                  {q.options.map((opt, i) => (
                    <p
                      key={i}
                      className={`p-2 rounded ${
                        i === q.correct
                          ? "bg-green-200"
                          : userAns === i
                          ? "bg-red-200"
                          : ""
                      }`}
                    >
                      {opt}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Performance Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Performance Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Questions Attempted</span>
                  <span className="font-bold">{result.attempted} / {result.total}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-gray-700">Correct Answers</span>
                  <span className="font-bold text-green-600">{result.correct}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                  <span className="text-gray-700">Wrong Answers</span>
                  <span className="font-bold text-red-600">{result.wrong}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Unanswered</span>
                  <span className="font-bold text-gray-600">{result.total - result.attempted}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="text-gray-700">Accuracy</span>
                  <span className="font-bold text-blue-600">
                    {result.attempted > 0 ? Math.round((result.correct / result.attempted) * 100) : 0}%
                  </span>
                </div>
              </div>
            </div>

            {/* Question-wise Analysis */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Question-wise Analysis</h2>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {questions.map((q, idx) => {
                  const userAns = answers[q.id];
                  const isCorrect = userAns === q.correct;
                  const isAttempted = userAns !== undefined;
                  
                  return (
                    <div
                      key={q.id}
                      className={`p-4 border rounded-lg ${
                        !isAttempted ? 'bg-gray-50 border-gray-200' :
                        isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <p className="font-medium text-gray-800">Q{idx + 1}. {q.question}</p>
                        <div className={`px-2 py-1 rounded text-xs font-medium ${
                          !isAttempted ? 'bg-gray-200 text-gray-700' :
                          isCorrect ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                        }`}>
                          {!isAttempted ? 'Not Attempted' : isCorrect ? 'Correct' : 'Wrong'}
                        </div>
                      </div>
                      
                      <div className="space-y-1 text-sm">
                        {q.options.map((opt, i) => (
                          <div
                            key={i}
                            className={`p-2 rounded ${
                              i === q.correct
                                ? "bg-green-200 text-green-800 font-medium"
                                : userAns === i && i !== q.correct
                                ? "bg-red-200 text-red-800"
                                : "bg-white"
                            }`}
                          >
                            {String.fromCharCode(65 + i)}. {opt}
                            {i === q.correct && <span className="ml-2">✓ Correct</span>}
                            {userAns === i && i !== q.correct && <span className="ml-2">✗ Your Answer</span>}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🏆 Leaderboard</h3>
              <div className="space-y-3">
                {leaderboard.map((user, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      user.name === "You" ? "bg-yellow-100 border border-yellow-300" : "bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        idx === 0 ? 'bg-yellow-500 text-white' :
                        idx === 1 ? 'bg-gray-400 text-white' :
                        idx === 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'
                      }`}>
                        {idx + 1}
                      </div>
                      <span className={`font-medium ${user.name === "You" ? "text-yellow-800" : "text-gray-800"}`}>
                        {user.name}
                      </span>
                    </div>
                    <span className="font-bold text-gray-800">{user.score}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">What's Next?</h3>
              <div className="space-y-3">
                <button
                  onClick={() => navigate("/")}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
                >
                  <Home className="w-4 h-4" />
                  Back to Home
                </button>
                
                <button
                  onClick={() => navigate("/testseries")}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition"
                >
                  <Trophy className="w-4 h-4" />
                  More Tests
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
