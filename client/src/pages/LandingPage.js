import React from "react";

const LandingPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <img src="/logo.png" alt="GroceryGenie Logo" className="w-32 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Welcome to GroceryGenie</h1>
        <p className="text-gray-400 mb-8">Your smart meal planning assistant</p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">
            Login
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
