import appIcon from "./assets/piper.jpg";

function App() {
  const downloadLink = "https://example.com/your-app-download-link";

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-white">
      <header className="py-6 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800">Piper</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center text-center">
        <img
          src={appIcon}
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
          <p>Compatible with Android devices Only</p>
          <p>Version 1.0.0</p>
        </div>
      </main>

      <footer className="py-6 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            &copy; 2024 Piper. All rights reserved.
          </p>
          {/* <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav> */}
        </div>
      </footer>
    </div>
  );
}

export default App;
