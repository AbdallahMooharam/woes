import React, { useState } from 'react';
import Slider from 'react-slick'; // استيراد Slider

const StudioRental = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [amount, setAmount] = useState(100); // افتراضي: 100 دولار

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${date} at ${time}. Total: $${amount}`);
  };

  // إعدادات السلايدر
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-white text-black py-5 text-center shadow-md">
        <h1 className="text-3xl font-bold">Studio Rental</h1>
        <p className="mt-2">Book your session today!</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Image Carousel */}
        <section className="mb-8">
          <Slider {...settings}>
            <div>
              <img src="https://i0.wp.com/aljawharaa.com/wp-content/uploads/2022/11/Photography-studios-in-Sharjah-Body-ar-20220621-1-1024x640-1.jpg?fit=1024%2C640&ssl=1%3Fv%3D1668027976&resize=350%2C200" alt="Studio 1" className="w-full rounded-lg" />
            </div>
            <div>
              <img src="https://cinema2y.com/wp-content/uploads/2022/02/%D8%A7%D8%B3%D8%AA%D8%AF%D9%8A%D9%88-%D8%AA%D8%B5%D9%88%D9%8A%D8%B1-3-780x470.jpg" alt="Studio 2" className="w-full rounded-lg" />
            </div>
            <div>
              <img src="https://insightstudios.sa/wp-content/uploads/2022/12/insightstudios-00115.jpg" alt="Studio 3" className="w-full rounded-lg" />
            </div>
          </Slider>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Studio Details</h2>
          <p className="mb-4">
            Our studio is equipped with the latest technology to capture high-quality images and videos.
            Perfect for photography sessions, video shoots, and more.
          </p>
          <p><strong>Price:</strong> ${amount}/hour</p>
        </section>

        {/* Booking Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Book a Session</h2>
          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <label htmlFor="date" className="block font-medium">Select Date:</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 block w-full border rounded-lg p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="time" className="block font-medium">Select Time:</label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="mt-1 block w-full border rounded-lg p-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Total Amount:</label>
              <span className="text-xl font-bold">${amount}</span>
            </div>
            <button type="submit" className="w-full bg-white text-black py-2 rounded-lg border border-black hover:bg-gray-200 transition">
              Confirm Booking
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default StudioRental;
