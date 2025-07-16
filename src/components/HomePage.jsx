
import React from "react";

export default function HomePage() {
  const services = [
    {
      title: "Interior Wall Painting",
      image: "/service1.jpg",
      description:
        "Interior paints are paints used in the interior of the building, in areas such as rooms, hallways, offices, bathrooms and kitchens."
    },
    {
      title: "Exterior Wall Painting",
      image: "/service2.jpg",
      description:
        "Exterior house paint is made for painting the shingles or siding of your home, not the walls of your living room, and the exterior finish of a car is on the outside."
    },
    {
      title: "Waterproofing Services",
      image: "/service3.jpg",
      description:
        "We offer durable and effective waterproofing coatings to protect your home from moisture and leaks."
    }
  ];

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-[#a8d5ba] text-gray-900 p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Sumitra Paints Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold">Sumitra's</h1>
        </div>
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#products" className="hover:text-[#4c8c6a]">Our Products</a>
          <a href="#about" className="hover:text-[#4c8c6a]">About Us</a>
          <a href="#contact" className="hover:text-[#4c8c6a]">Contact Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-end text-white pr-16"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <h2 className="relative text-5xl font-semibold leading-snug text-right z-10">
          Har Deewaar Ki <br /> Apni Pehchaan !
        </h2>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 px-6 bg-white text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img src="/about-image.jpg" alt="About Sumitra Paints" className="rounded shadow-md" />
          <div>
            <h3 className="text-2xl font-bold text-[#4c8c6a] mb-1">About Us</h3>
            <h4 className="text-xl font-semibold mb-4">Welcome To Sumitra Paints</h4>
            <p className="mb-3">
              Sumitra Paints is a leading paint manufacturing company based in India. Founded in 1972, we’ve become one of the largest producers of decorative, industrial, and automotive paints.
            </p>
            <p>
              We focus on quality, innovation, and sustainable solutions to deliver premium results to our customers nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Service Hover Section */}
      <section className="bg-[#f2f9f4] px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition duration-300"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-[#4c8c6a] bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-white text-center p-4">
                <h4 className="text-lg font-bold mb-2">{service.title}</h4>
                <p className="text-sm leading-relaxed">{service.description}</p>
              </div>
              <div className="text-center p-4 font-semibold text-gray-800">{service.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Exclusive Products */}
      <section id="products" className="px-6 py-16 bg-white">
        <h3 className="text-3xl font-bold text-center text-[#4c8c6a] mb-10">Exclusive Products</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {[...Array(10)].map((_, idx) => (
            <div
              key={idx}
              className="cursor-pointer bg-white rounded shadow hover:shadow-lg transition"
              onClick={() => window.location.href = `/products/${idx + 1}`}
            >
              <img
                src={`/products/paint${idx + 1}.jpg`}
                alt={`Product ${idx + 1}`}
                className="w-full h-40 object-contain p-4"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section
       id="contact" 
       className="px-6 py-16 text-gray-800 bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: "url('/contact-bg.jpg')" }}>
       <div className="bg-white/80 backdrop-blur-sm p-8 rounded shadow-lg"></div>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
          <form className="bg-white text-gray-800 rounded p-6 shadow space-y-4">
            <div>
              <label className="text-sm font-semibold">Name *</label>
              <input type="text" placeholder="Your Name" className="w-full border p-2 rounded mt-1" />
            </div>
            <div>
              <label className="text-sm font-semibold">Email *</label>
              <input type="email" placeholder="Your Email" className="w-full border p-2 rounded mt-1" />
            </div>
            <div>
              <label className="text-sm font-semibold">Phone *</label>
              <input type="tel" placeholder="Your Phone" className="w-full border p-2 rounded mt-1" />
            </div>
            <div>
              <label className="text-sm font-semibold">Message *</label>
              <textarea className="w-full border p-2 rounded mt-1" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button className="bg-[#4c8c6a] text-white px-4 py-2 rounded hover:bg-[#3a6f54]">
              Submit Now
            </button>
          </form>

          <div className="space-y-6 flex flex-col justify-center">
            <div>
              <h4 className="text-4xl font-bold">100+</h4>
              <p>Happy Customers</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold">50</h4>
              <p>Products</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold">1 Year</h4>
              <p>Warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2e4e3f] text-white px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h5 className="font-bold mb-2">Our Products</h5>
            <p>Oil Based Paints</p>
            <p>Water Based Paints</p>
          </div>
          <div>
            <h5 className="font-bold mb-2">Important Links</h5>
            <p>Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div>
            <h5 className="font-bold mb-2">Get in Touch</h5>
            <p>Shed No. 11, Industrial Area, Amritsar</p>
            <p>sumitrapaints@gmail.com</p>
            <p>+91-72998 65001</p>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-white/10 pt-4 text-xs">
          &copy; {new Date().getFullYear()} Sumitra Paints | All Rights Reserved
        </div>
      </footer>
      <a
       href="https://wa.me/917299865001"
       target="_blank"
       rel="noopener noreferrer"
       className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition z-50">
       <i className="fab fa-whatsapp text-2xl"></i>
     </a>

    </div>
  );
}
