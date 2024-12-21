import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'; // استيراد الأيقونات

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to open sidebar on small screens */}
      <button
        className="md:hidden p-4 text-black"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white text-black transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 shadow-lg`}>
        <h1 className="text-2xl font-bold text-center p-4">W O E C</h1>
        <nav className="flex-1">
          <ul className="space-y-4 p-4">
            <li>
              <Link to="/" className="block p-4 bg-white rounded-lg shadow hover:bg-gray-200 transition">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/Tenant-Dashboard" className="block p-4 bg-white rounded-lg shadow hover:bg-gray-200 transition">
                TENANT DASHBOARD
              </Link>
            </li>
            <li>
              <Link to="/office-rental" className="block p-4 bg-white rounded-lg shadow hover:bg-gray-200 transition">
                OFFICE RENTAL
              </Link>
            </li>
            <li>
              <Link to="/studio-rental" className="block p-4 bg-white rounded-lg shadow hover:bg-gray-200 transition">
                STUDIO RENTAL
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4">
          <Link to="/Contact-Us" className="block p-4 bg-white rounded-lg shadow hover:bg-gray-200 transition text-center">
            CONTACT US
          </Link>
        </div>
        {/* قسم وسائل التواصل الاجتماعي */}
        <div className="flex justify-center space-x-4 p-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
