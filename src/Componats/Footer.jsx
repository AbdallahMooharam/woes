// Components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-6 mt-10">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-xl font-semibold mb-2">W O E C</h2>
        <p className="text-sm mb-2">
          We are based in Kuwait, 360 Kuwait - 6th Ring Road South Surra, 
          Al Zhara Area, TAMDEEN GROUP Offices 3rd & 4th Floor
        </p>
        <a href="https://www.google.com/maps" className="text-blue-500 hover:underline text-sm mb-4">View on Google map</a>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <div>
            <h3 className="text-lg font-semibold">Navigations</h3>
            <div className="flex flex-col space-y-1 mt-1">
              <a href="/" className="hover:text-gray-600 text-sm">Home</a>
              <a href="/about" className="hover:text-gray-600 text-sm">About</a>
              <a href="/portfolio" className="hover:text-gray-600 text-sm">TENANT DASHBOARD</a>
              <a href="/news" className="hover:text-gray-600 text-sm">OFFICE RENTAL</a>
              <a href="/awards" className="hover:text-gray-600 text-sm">STUDIO RENTAL</a>
              <a href="/contact" className="hover:text-gray-600 text-sm">CONTACT US</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="flex flex-col space-y-1 mt-1">
              <p className="text-sm">Call Center: (965) 188 2233</p>
              <p className="text-sm">Telephone: (965) 2536 2330</p>
              <p className="text-sm">P.O. Box 21816, Safat 13079, Kuwait</p>
              <a href="/send-message" className="text-blue-500 hover:underline text-sm">Send Message</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center space-x-4 mt-1">
              <a href="#" className="hover:text-gray-600 text-sm">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="hover:text-gray-600 text-sm">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-gray-600 text-sm">
                <FaLinkedinIn size={24} />
              </a>
              <a href="#" className="hover:text-gray-600 text-sm">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <p className="text-xs mt-4">© 2024, Abdallah Moharam. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
