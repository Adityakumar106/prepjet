import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/Auth/authslice";
import { FaUserCircle } from "react-icons/fa";
import { Camera, Edit3, Save, X } from "lucide-react";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  
  const [user, setUser] = useState(
    {
      name: user?.name || "John Doe",
      email: user?.email || "john@example.com",
      about: "Aspiring civil servant preparing for UPSC 2025",
      preparingFor: "UPSC Civil Services",
      purchasedTests: ["SSC CGL 2025", "UPSC Prelims 2025"],
      avatar: null
    }
  );

  const [isEditing, setIsEditing] = useState(false);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser({ ...user, avatar: imageUrl });
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save changes to backend here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-6">
          {/* Profile Header */}
          <div className="flex flex-col items-center relative">
            <div className="relative">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <FaUserCircle className="text-white w-20 h-20" />
                </div>
              )}
              
              {/* Avatar Upload Button */}
              <label className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full cursor-pointer shadow-lg transition">
                <Camera size={16} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </label>
            </div>
        
            {/* Name & Email */}
            {isEditing ? (
              <div className="mt-6 w-full max-w-md space-y-4">
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Full Name"
                />
              </div>
            ) : (
              <>
                <h2 className="mt-6 text-3xl font-bold text-gray-800">{user.name}</h2>
                <p className="text-gray-600 text-lg">{user.email}</p>
                <div className="mt-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {user.preparingFor}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Profile Details Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* About Me Card */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">About Me</h3>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-blue-600 hover:text-blue-800 p-2 rounded-lg hover:bg-blue-50 transition"
                >
                  <Edit3 size={18} />
                </button>
              )}
            </div>
            {isEditing ? (
              <textarea
                value={user.about}
                onChange={(e) => setUser({ ...user, about: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="4"
                placeholder="Tell us about yourself..."
              />
            ) : (
              <p className="text-gray-700 leading-relaxed">{user.about}</p>
            )}

            {isEditing && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preparing For
                </label>
                <input
                  type="text"
                  value={user.preparingFor}
                  onChange={(e) => setUser({ ...user, preparingFor: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., UPSC Civil Services"
                />
              </div>
            )}
          </div>

          {/* Purchased Test Series Card */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">My Test Series</h3>
            {user.purchasedTests.length > 0 ? (
              <div className="space-y-3">
                {user.purchasedTests.map((test, index) => (
                  <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-800 font-medium">{test}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-gray-400 mb-2">📚</div>
                <p className="text-gray-500">No test series purchased yet</p>
                <a
                  href="/testseries"
                  className="inline-block mt-3 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Browse Test Series →
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 bg-white shadow-lg rounded-2xl p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition transform hover:scale-105"
                >
                  <Save size={18} />
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition transform hover:scale-105"
                >
                  <X size={18} />
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition transform hover:scale-105"
              >
                <Edit3 size={18} />
                Edit Profile
              </button>
            )}

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition transform hover:scale-105"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
