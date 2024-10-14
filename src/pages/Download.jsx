import React from "react";
import logo from "./../assets/piper.jpg";

function Download() {
  const downloadLink = "https://example.com/your-app-download-link";

  return (
    <div className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center text-center">
      <img
        src={logo}
        alt="App Icon"
        className="w-32 h-32 mb-6 rounded-2xl shadow-lg"
      />
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Download Our Amazing App
      </h2>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl">
        Experience the power of our app. Boost your productivity, stay
        organized, and achieve your goals with ease.
      </p>
      <a
        href={downloadLink}
        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
      >
        Download Now
      </a>
      <div className="mt-10 text-gray-600">
        <p>Compatible with Android devices only</p>
        <p>Version 1.0.0</p>
      </div>
    </div>
  );
}

export default Download;
