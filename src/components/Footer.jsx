import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
        <p className="text-gray-600 mb-4 md:mb-0">
          &copy; 2023 Piper. All rights reserved.
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
  );
}

export default Footer;
