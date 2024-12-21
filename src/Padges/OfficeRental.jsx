import React from 'react';

const OfficeRental = () => {
  const offices = [
    {
      id: 1,
      name: 'Office 101',
      size: '300 sq ft',
      price: '$1200/month',
      contact: '123-456-7890',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGObGoAQTIXDA6TOK3a96Ry8Fwas2lmUAvw&s' // رابط الصورة
    },
    {
      id: 2,
      name: 'Office 102',
      size: '400 sq ft',
      price: '$1500/month',
      contact: '123-456-7890',
      image: 'https://www.semsarmasr.com/media/238/realestate_%D9%85%D9%83%D8%AA%D8%A8-%D9%81%D8%AE%D9%85-%D9%84%D9%84%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1-%D9%85%D9%81%D8%B1%D9%88%D8%B4-%D8%A8%D8%A7%D9%84%D9%86%D8%B2%D9%87%D9%87-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D9%87120200112114754.jpg' // رابط الصورة
    },
    {
      id: 3,
      name: 'Office 201',
      size: '500 sq ft',
      price: '$1800/month',
      contact: '123-456-7890',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsSfn_wE51GqEn6sEz2cpfBmG0Qfcprjg9Q&s' // رابط الصورة
    },
    {
      id: 4,
      name: 'Office 202',
      size: '600 sq ft',
      price: '$2000/month',
      contact: '123-456-7890',
      image: 'https://www.makanakoffice.com/wp-content/uploads/2021/10/%D9%85%D9%83%D8%A7%D8%AA%D8%A8-%D9%84%D9%84%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1-%D8%A7%D9%84%D8%AF%D9%82%D9%8A.jpg' // رابط الصورة
    },
    {
      id: 5,
      name: 'Office 301',
      size: '700 sq ft',
      price: '$2500/month',
      contact: '123-456-7890',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBSygRJ2e-IEu3NI4Q2r9yTg0mfHV7KxulLw&s' // رابط الصورة
    },
    {
      id: 6,
      name: 'Office 302',
      size: '800 sq ft',
      price: '$3000/month',
      contact: '123-456-7890',
      image: 'https://sa.sakan.co/blog/wp-content/uploads/2024/07/%D9%83%D9%8A%D9%81-%D8%AA%D8%AE%D8%AA%D8%A7%D8%B1-%D8%A3%D9%81%D8%B6%D9%84-%D9%85%D9%83%D8%A7%D8%AA%D8%A8-%D9%84%D9%84%D8%A7%D9%8A%D8%AC%D8%A7%D8%B1%D8%9F-%D8%AE%D8%B7%D9%88%D8%A7%D8%AA-%D9%85%D8%AF%D8%B1%D9%88%D8%B3%D8%A9-%D9%84%D9%86%D8%AC%D8%A7%D8%AD-%D9%85%D8%B6%D9%85%D9%88%D9%86.jpeg' // رابط الصورة
    },
    {
      id: 7,
      name: 'Office 401',
      size: '900 sq ft',
      price: '$3500/month',
      contact: '123-456-7890',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1L_swHeS0uwJX55bWZGGEQwsEQHF7z-UmWw&s' // رابط الصورة
    },
    {
      id: 8,
      name: 'Office 402',
      size: '1000 sq ft',
      price: '$4000/month',
      contact: '123-456-7890',
      image: 'https://www.propertyfinder.eg/property/80a89c3b66efb837ec877ea0f727f3dc/416/272/MODE/35bdaa/5186440-dd80do.jpg?ctr=eg' // رابط الصورة
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-white text-black py-5 text-center shadow-md">
        <h1 className="text-3xl font-bold">Office Rental</h1>
        <p className="mt-2">Explore our available office spaces</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offices.map((office) => (
            <div
              key={office.id}
              className="bg-gradient-to-r from-gray-200 to-gray-300 flex flex-col rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
            >
              <img src={office.image} alt={office.name} className="rounded-t-lg h-48 w-full object-cover" />
              <div className="p-6 flex-1">
                <h3 className="font-bold text-xl mb-2">{office.name}</h3>
                <p className="mt-2"><strong>Size:</strong> {office.size}</p>
                <p className="mt-1"><strong>Price:</strong> {office.price}</p>
                <p className="mt-1"><strong>Contact:</strong> {office.contact}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default OfficeRental;
