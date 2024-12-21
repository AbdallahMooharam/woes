import React, { useState } from 'react';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const directors = [
    {
      name: "Director 1",
      imgSrc: "https://png.pngtree.com/background/20230403/original/pngtree-portrait-of-business-executive-vector-picture-image_2272602.jpg"
    },
    {
      name: "Director 2",
      imgSrc: "https://png.pngtree.com/background/20230403/original/pngtree-portrait-of-business-executive-vector-picture-image_2272602.jpg"
    },
    {
      name: "Director 3",
      imgSrc: "https://png.pngtree.com/background/20230403/original/pngtree-portrait-of-business-executive-vector-picture-image_2272602.jpg"
    },
  ];

  const handleImageChange = () => {
    setCurrentImage((currentImage + 1) % directors.length);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <Header />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Directors Section */}
      <DirectorsSection
        directors={directors}
        currentImage={currentImage}
        handleImageChange={handleImageChange}
      />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

const Header = () => (
  <header className="relative bg-blue-600 text-white h-screen overflow-hidden">
    <BackgroundImage src="https://www.napratica.org.br/wp-content/uploads/2017/08/destaque-contrato.jpg" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full">
      <h1 className="text-6xl font-bold uppercase tracking-wide">Welcome to Our S W O E C</h1>
      <p className="mt-2 text-xl">We provide various services to meet your needs.</p>
    </div>
  </header>
);

const AboutSection = () => (
  <section className="flex flex-col md:flex-row items-center justify-between p-8">
    <h2 className="text-5xl font-bold uppercase md:w-1/3 mb-4 md:mb-0">ABOUT US</h2>
    <div className="md:w-2/3 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 mb-4">
          The Tamdeen Group of Companies has grown dynamically into a regional powerhouse. Through inspirational leadership and a visionary strategic focus.
        </p>
        <a href="/about" className="inline-block mt-4 px-6 py-2 bg-white text-blue-600 rounded-lg transition-transform transform hover:bg-blue-100 hover:translate-x-1">
          Learn More About Us
        </a>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="relative bg-gray-200 p-8">
    <BackgroundImage src="https://www.napratica.org.br/wp-content/uploads/2017/08/destaque-contrato.jpg" opacity={0.3} />
    <div className="relative z-10 text-center">
      <h2 className="text-5xl font-bold uppercase mb-2">OUR SERVICES</h2>
      <p className="text-lg mb-4">Explore our diverse range of services tailored to meet your needs.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
      <div className="mt-6">
        <a href="/profile" className="inline-block px-6 py-2 bg-white text-blue-600 rounded-lg transition-transform transform hover:bg-blue-100 hover:translate-x-1">
          More Profile
        </a>
      </div>
    </div>
  </section>
);

const DirectorsSection = ({ directors, currentImage, handleImageChange }) => (
  <section className="bg-white py-10 text-center">
    <h2 className="text-4xl font-semibold italic mb-6">Meet Our Directors</h2>
    <div className="flex flex-col items-center">
      <img
        src={directors[currentImage].imgSrc}
        alt={directors[currentImage].name}
        className="transition-opacity duration-1000 ease-in-out w-80 h-auto mb-4"
      />
      <p className="mt-4 text-lg">{directors[currentImage].name}</p>
      <button
        onClick={handleImageChange}
        className="mt-4 px-4 py-2 bg-white text-blue-600 rounded-lg transition-transform transform hover:bg-blue-100"
      >
        Next Director
      </button>
    </div>
  </section>
);

const ContactSection = () => (
    <section className="bg-white py-10">
      <h2 className="text-3xl font-semibold text-center uppercase italic">Get in Touch</h2>
      <p className="text-center mt-2">Have questions? Reach out to us!</p>
      <div className="flex justify-center mt-4">
        <a href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-black transition">Contact Us</a>
      </div>
    </section>
  );
  

const BackgroundImage = ({ src, opacity = 1 }) => (
  <div className="absolute inset-0">
    <img
      src={src}
      alt="Background Pattern"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ opacity }}
    />
  </div>
);

const services = [
  { title: "Office Rental", description: "Flexible office spaces for your business needs.", link: "/office-rental" },
  { title: "Studio Rental", description: "Professional studio spaces for photography and events.", link: "/studio-rental" },
  { title: "Consulting Services", description: "Expert advice to help your business grow.", link: "/consulting" },
];

const ServiceCard = ({ service }) => (
  <div className="bg-white p-8 rounded-lg shadow-md h-64 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
    <h3 className="font-bold text-xl">{service.title}</h3>
    <p className="mt-2 text-gray-600">{service.description}</p>
    <a href={service.link} className="mt-4 inline-block px-4 py-2 bg-white text-blue-600 rounded-lg transition-transform transform hover:bg-blue-100">
      More Info
    </a>
  </div>
);

export default Home;
