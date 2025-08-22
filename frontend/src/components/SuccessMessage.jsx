import { CheckCircle, X } from "lucide-react";

export default function SuccessMessage({ message, onClose }) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
      <div className="flex items-start">
        <CheckCircle className="text-green-500 w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-green-800 text-sm font-medium">{message}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-green-800 hover:opacity-75 ml-3"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}