import React from "react";
import logo from "./../assets/piper.jpg";
import playstore from "./../assets/googleplay.png";

function Download() {
  const downloadLink =
    "https://play.google.com/store/apps/details?id=com.piperbloom.proxyvpn";

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
      <a href={downloadLink} className="">
        <img src={playstore} alt="Play Store" />
      </a>
      <div className="mt-10 text-gray-600">
        <p>Compatible with Android devices only</p>
        <p>Version 1.0.0</p>
      </div>
    </div>
  );
}

export default Download;
