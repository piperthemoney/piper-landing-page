import React from "react";
import { Link } from "react-router-dom";
import { Zap, Shield, Sliders } from "lucide-react";

function Home() {
  return (
    <div className="flex-grow container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Piper App
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience lightning-fast, secure, and user-friendly VPN service at
          your fingertips.
        </p>
        <Link
          to="/download"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
        >
          Download Now
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <Zap className="w-12 h-12 text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-4">Fast Connection Time</h2>
          <p className="text-gray-600">
            Connect to our VPN servers in seconds. No more waiting around - get
            online and protected instantly.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <Shield className="w-12 h-12 text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-4">Stable Ping</h2>
          <p className="text-gray-600">
            Enjoy consistent, low-latency connections. Perfect for gaming,
            streaming, and video calls.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <Sliders className="w-12 h-12 text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-4">Easy to Use</h2>
          <p className="text-gray-600">
            User-friendly interface designed for everyone. Connect with just one
            click - it's that simple!
          </p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why Choose Our VPN?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Blazing Fast Speeds</h3>
            <p className="text-gray-600">
              Our optimized servers ensure you get the fastest possible
              connection speeds.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Global Server Network
            </h3>
            <p className="text-gray-600">
              Access content from anywhere with our vast network of servers
              across the globe.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Strong Encryption</h3>
            <p className="text-gray-600">
              Your data is protected with military-grade encryption, ensuring
              your online privacy.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              24/7 Customer Support
            </h3>
            <p className="text-gray-600">
              Our dedicated support team is always ready to assist you with any
              questions or issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
