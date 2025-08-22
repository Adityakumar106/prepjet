import { useNavigate, useParams } from "react-router-dom";
import { Clock, AlertTriangle, CheckCircle, BookOpen } from "lucide-react";

export default function TestInstructions() {
  const navigate = useNavigate();
  const { seriesId, testId } = useParams(); // read from route

  const handleStart = () => {
    navigate(`/test/${seriesId}/${testId}`); // go to attempt page
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Test Instructions</h1>
            <p className="text-gray-600">Please read all instructions carefully before starting the test</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Test Details */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              Test Details
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-semibold">180 minutes (3 hours)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Questions:</span>
                <span className="font-semibold">100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Correct Answer:</span>
                <span className="font-semibold text-green-600">+4 marks</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Wrong Answer:</span>
                <span className="font-semibold text-red-600">-1 mark</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Unanswered:</span>
                <span className="font-semibold text-gray-600">0 marks</span>
              </div>
            </div>
          </div>

          {/* Important Points */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              Important Points
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">You can navigate between questions anytime</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Questions are auto-saved as you answer</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Timer will be visible throughout the test</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Do not refresh or close the browser</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Test will auto-submit when time expires</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Instructions List */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">General Instructions</h2>
          <ol className="list-decimal pl-6 space-y-4 text-gray-700">
            <li>
              <strong>Time Management:</strong> The test duration is 180 minutes (3 hours). Plan your time wisely across all sections.
            </li>
            <li>
              <strong>Marking Scheme:</strong> Each correct answer carries +4 marks, while each incorrect answer has a penalty of -1 mark. Unanswered questions carry 0 marks.
            </li>
            <li>
              <strong>Navigation:</strong> You can move between questions using the question palette on the left side. Questions are color-coded for easy identification.
            </li>
            <li>
              <strong>Technical Requirements:</strong> Ensure stable internet connection. Do not refresh the page or use browser back/forward buttons during the test.
            </li>
            <li>
              <strong>Submission:</strong> Click "Submit Test" when you're done. The test will automatically submit when time expires.
            </li>
            <li>
              <strong>Review:</strong> You can review and change your answers before final submission.
            </li>
          </ol>
        </div>

        {/* Start Button */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <p className="text-gray-600 mb-6">
            By clicking "Start Test", you agree that you have read and understood all the instructions above.
          </p>
          <button
            onClick={handleStart}
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-xl font-bold text-lg transition transform hover:scale-105 shadow-lg"
          >
            🚀 Start Test Now
          </button>
        </div>
      </div>
    </div>
  );
}
