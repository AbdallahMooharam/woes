import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${name}`);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-10">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800">Get in Touch</h1>
        <p className="mt-2 text-xl text-gray-600">We'd love to hear from you!</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full p-8 max-w-2xl mx-auto">
        <section className="bg-gray-100 rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105">
          <h2 className="text-4xl font-semibold mb-6 text-center text-gray-800">Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">Your Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">Your Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium text-gray-700">Your Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Information */}
        <section className="mt-10 bg-gray-100 rounded-lg shadow-lg p-8">
          <h2 className="text-4xl font-semibold mb-6 text-center text-gray-800">Our Contact Information</h2>
          <div className="space-y-2 text-center">
            <p className="text-lg"><strong>Email:</strong> contact@yourcompany.com</p>
            <p className="text-lg"><strong>Phone:</strong> (123) 456-7890</p>
            <p className="text-lg"><strong>Address:</strong> 123 Your Street, City, Country</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;
