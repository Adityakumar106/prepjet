import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function ProfilePage() {
  const [user, setUser] = useState(
    {
      name: "Aditya",
      email: "",
      about: "",
      preparingFor: "",
      purchasedTests: [],
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
    localStorage.removeItem("token");
    window.location.href = "/auth";
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save changes to backend here
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
        
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-blue-500"
            />
          ) : (
            <FaUserCircle className="text-blue-500 w-28 h-28" />
          )}

          {/* Avatar Upload */}
          <label className="mt-3 text-sm text-blue-600 cursor-pointer hover:underline">
            Change Avatar
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </label>

          {/* Name & Email */}
          {isEditing ? (
            <>
              <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="mt-4 px-3 py-2 border rounded-lg w-full max-w-sm"
              />
             
            </>
          ) : (
            <>
              <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </>
          )}
        </div>

        {/* About & Preparing For */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-800">About Me</h3>
          {isEditing ? (
            <textarea
              value={user.about}
              onChange={(e) => setUser({ ...user, about: e.target.value })}
              className="mt-2 w-full border rounded-lg px-3 py-2"
              rows="3"
            />
          ) : (
            <p className="text-gray-700 mt-1">{user.about}</p>
          )}

          <h3 className="font-semibold text-gray-800 mt-4">Preparing For</h3>
          {isEditing ? (
            <input
              type="text"
              value={user.preparingFor}
              onChange={(e) => setUser({ ...user, preparingFor: e.target.value })}
              className="mt-2 w-full border rounded-lg px-3 py-2"
            />
          ) : (
            <p className="text-gray-700 mt-1">{user.preparingFor}</p>
          )}
        </div>

        {/* Purchased Test Series */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-800">Purchased Test Series</h3>
          <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
            {user.purchasedTests.map((test, index) => (
              <li key={index}>{test}</li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-medium transition"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-medium transition"
            >
              Edit Profile
            </button>
          )}

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
