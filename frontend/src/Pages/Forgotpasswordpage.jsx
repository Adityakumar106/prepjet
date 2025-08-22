import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import SuccessMessage from '../components/SuccessMessage';
import ErrorMessage from '../components/ErrorMessage';

const Forgotpasswordpage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setMessage("Password reset link has been sent to your email address.");
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Forgot Password? 🔐</h2>
          <p className="text-sm text-gray-600">
            No worries! Enter your email and we'll send you a reset link.
          </p>
        </div>

        {message && <SuccessMessage message={message} />}
        {error && <ErrorMessage message={error} />}

        <p className="text-sm text-gray-600 mb-4 text-center">
          Enter your email to receive a password reset link
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition flex items-center justify-center"
        >
          {loading ? (
            <>
              <LoadingSpinner size="sm" color="white" />
              <span className="ml-2">Sending...</span>
            </>
          ) : (
            "Send Reset Link"
          )}
        </button>

        <div className="text-center mt-6">
          <Link 
            to="/auth" 
            className="text-blue-500 hover:text-blue-700 text-sm font-medium hover:underline"
          >
            ← Back to Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Forgotpasswordpage;

