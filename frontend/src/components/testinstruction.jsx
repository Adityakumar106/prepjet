import { useNavigate, useParams } from "react-router-dom";

export default function TestInstructions() {
  const navigate = useNavigate();
  const { seriesId, testId } = useParams(); // read from route

  const handleStart = () => {
    navigate(`/test/${seriesId}/${testId}`); // go to attempt page
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Test Instructions
        </h1>
        <ul className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>Total Duration: 180 minutes (3 hours).</li>
          <li>Each correct answer: +4 marks, Each wrong answer: -1 mark.</li>
          <li>Do not refresh or close the window during the test.</li>
          <li>You can navigate between questions anytime.</li>
          <li>Click "Submit Test" once done. Unanswered = 0 marks.</li>
        </ul>
        <button
          onClick={handleStart}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Start Test
        </button>
      </div>
    </div>
  );
}
