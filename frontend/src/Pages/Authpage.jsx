import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginStart, loginSuccess, loginFailure } from "../redux/Auth/authslice";
import { authAPI } from "../api";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      let response;
      if (isLogin) {
        response = await authAPI.login(loginData);
      } else {
        response = await authAPI.signup(signupData);
      }

      dispatch(loginSuccess({
        user: response.data.user || { email: loginData.email || signupData.email },
        token: response.data.token
      }));

      navigate('/');
    } catch (error) {
      dispatch(loginFailure(error.response?.data?.message || 'Authentication failed'));
    }
  };

  const handleGoogleSignup = () => {
    console.log("Google Sign-In clicked 🚀");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl w-full max-w-sm border border-gray-200">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? "Welcome Back 👋" : "Create an Account 🚀"}
        </h2>

        {/* Tabs */}
        <div className="flex mb-6 bg-gray-100 rounded-lg overflow-hidden">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 text-sm sm:text-base font-medium ${
              isLogin ? "bg-white text-blue-600 shadow" : "text-gray-500"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 text-sm sm:text-base font-medium ${
              !isLogin ? "bg-white text-blue-600 shadow" : "text-gray-500"
            }`}
          >
            Signup
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <ErrorMessage message={error} />
          )}

          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={signupData.name}
              onChange={handleSignupChange}
              className="w-full p-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={isLogin ? loginData.email : signupData.email}
            onChange={isLogin ? handleLoginChange : handleSignupChange}
            className="w-full p-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={isLogin ? loginData.password : signupData.password}
              onChange={isLogin ? handleLoginChange : handleSignupChange}
              className="w-full p-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            {isLogin && (
              <div className="text-right mt-1">
                <Link 
                  to="/forgetpassword" 
                  className="text-xs sm:text-sm text-blue-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 flex items-center justify-center"
          >
            {loading ? (
              <>
                <LoadingSpinner size="sm" color="white" />
                <span className="ml-2">Please wait...</span>
              </>
            ) : (
              isLogin ? "Login" : "Signup"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-400 text-xs sm:text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-2 sm:gap-3 border border-gray-300 rounded-lg py-2 sm:py-3 hover:bg-gray-50 transition"
        >
          <FcGoogle size={20} className="sm:w-6 sm:h-6" />
          <span className="text-gray-700 font-medium text-sm sm:text-base">
            Continue with Google
          </span>
        </button>

        {/* Footer text */}
        <p className="text-center text-xs sm:text-sm text-gray-500 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
