import { useLocation, useNavigate } from "react-router-dom";

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
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Score Section */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Test Results</h1>
        <p className="text-lg mb-2">Score: <span className="font-bold">{result.score}</span></p>
        <p className="text-gray-700">
          Attempted: {result.attempted} / {result.total}, ✅ Correct: {result.correct}, ❌ Wrong: {result.wrong}
        </p>

        {/* Question-wise Analysis */}
        <h2 className="text-xl font-semibold mt-6 mb-3">Question-wise Analysis</h2>
        <div className="space-y-4">
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

        {/* Leaderboard */}
        <h2 className="text-xl font-semibold mt-8 mb-3">Leaderboard</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Rank</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((user, idx) => (
                <tr
                  key={idx}
                  className={`${user.name === "You" ? "bg-yellow-100" : ""}`}
                >
                  <td className="p-2 border">{idx + 1}</td>
                  <td className="p-2 border">{user.name}</td>
                  <td className="p-2 border">{user.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Back to Home */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
