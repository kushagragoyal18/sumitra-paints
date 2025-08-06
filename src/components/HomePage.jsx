import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Assuming lucide-react is installed

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0); // State for current slide

  // Array of images for the hero section slider
  // IMPORTANT: Replace these with your actual image paths/URLs.
  // The first image (index 0) will have the text "Har Deewaar Ki Apni Pehchaan !".
  const heroImages = [
    "/hero-bg.jpg", // Your existing image (first image)
    "/slide1.jpg", // Example image 1
    "https://www.giffywalls.in/cdn/shop/files/9U5Z7B_2_cdcc3baa-a3c1-4f1b-ba1d-9ddefb239091.jpg?quality=90&v=1734200062&width=1326", // Example image 2
    "https://www.buildingmaterialreporter.com/uploads/blogs/files/07%20(6).jpg" // Example image 3
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Effect for automatic slide change
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        (prevIndex + 1) % heroImages.length
      );
    }, 5000); // Change image every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(slideInterval);
  }, [heroImages.length]); // Re-run effect if heroImages array length changes

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

  const testimonials = [
    {
      name: "Ravi Kumar",
      message: "Sumitra Paints transformed our home with vibrant colors and excellent service! Highly recommend!",
    },
    {
      name: "Pooja Sharma",
      message: "Professional team and amazing product range. We are truly satisfied with the results.",
    },
    {
      name: "Amit Verma",
      message: "Best paint quality I've experienced. Long-lasting and beautifully finished walls.",
    }
  ];

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-[#a8d5ba] text-gray-900 p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Sumitra Paints Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-xl font-bold">Sumitra Paints and Chemicals </h1>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#products" className="hover:text-[#4c8c6a] transition-colors duration-200">Our Products</a>
          <a href="#about" className="hover:text-[#4c8c6a] transition-colors duration-200">About Us</a>
          <a href="#contact" className="hover:text-[#4c8c6a] transition-colors duration-200">Contact Us</a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-[#8ec2a6] focus:outline-none focus:ring-2 focus:ring-[#4c8c6a]">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#a8d5ba] px-4 py-4 flex flex-col space-y-4 text-sm font-medium shadow-lg absolute w-full z-40 animate-fade-in">
          <a href="#products" className="hover:text-[#4c8c6a] py-2 px-3 rounded-md transition-colors duration-200" onClick={toggleMenu}>Our Products</a>
          <a href="#about" className="hover:text-[#4c8c6a] py-2 px-3 rounded-md transition-colors duration-200" onClick={toggleMenu}>About Us</a>
          <a href="#contact" className="hover:text-[#4c8c6a] py-2 px-3 rounded-md transition-colors duration-200" onClick={toggleMenu}>Contact Us</a>
        </div>
      )}

      {/* Hero Section with Slider */}
      <section className="relative h-[85vh] overflow-hidden"> {/* Added overflow-hidden to contain sliding elements */}
        {/* Container for all slides - this div will slide horizontally */}
        <div
          className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
        >
          {heroImages.map((image, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 bg-cover bg-center relative"
              style={{ backgroundImage: `url('${image}')` }}
            >
              <div className="absolute inset-0 bg-black opacity-30" />
              {/* Conditional rendering for the text */}
              {idx === 0 && ( // Text only on the first slide
                <h2 className="absolute bottom-1/2 right-16 transform translate-y-1/2 text-5xl font-semibold leading-snug text-right z-10 drop-shadow-lg text-white">
                  Har Deewaar Ki <br /> Apni Pehchaan !
                </h2>
              )}
            </div>
          ))}
        </div>

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentSlideIndex === idx ? "bg-white" : "bg-gray-400 opacity-70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 px-6 bg-white text-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img src="/about-image.jpg" alt="About Sumitra Paints" className="rounded-lg shadow-md w-full h-auto object-cover" />
          <div>
            <h3 className="text-2xl font-bold text-[#4c8c6a] mb-1">About Us</h3>
            <h4 className="text-xl font-semibold mb-4">Welcome To Sumitra Paints</h4>
            <p className="mb-3 leading-relaxed">
              Sumitra Paints is a leading paint manufacturing company based in India. Founded in 2020, we’ve become one of the largest producers of decorative, industrial, and automotive paints.
            </p>
            <p className="leading-relaxed">
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
              className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
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

      {/* Testimonials */}
      <section className="bg-[#f2f9f4] px-6 py-16">
        <h3 className="text-3xl font-bold text-center text-[#4c8c6a] mb-10">What Our Customers Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
              <p className="text-gray-700 italic text-base">"{t.message}"</p>
              <p className="mt-4 font-semibold text-[#4c8c6a] text-lg">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact"
        className="px-6 py-16 text-gray-800 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/contact-bg.jpg')" }}
      >
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
            <form className="bg-white text-gray-800 rounded-lg p-6 shadow space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-1">Name *</label>
                <input type="text" id="name" placeholder="Your Name" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c8c6a] transition-all duration-200" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-1">Email *</label>
                <input type="email" id="email" placeholder="Your Email" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c8c6a] transition-all duration-200" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-1">Phone *</label>
                <input type="tel" id="phone" placeholder="Your Phone" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c8c6a] transition-all duration-200" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-1">Message *</label>
                <textarea id="message" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c8c6a] transition-all duration-200" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <button className="bg-[#4c8c6a] text-white px-6 py-3 rounded-full hover:bg-[#3a6f54] transition-all duration-200 shadow-md hover:shadow-lg">
                Submit Now
              </button>
            </form>

            <div className="space-y-6 flex flex-col justify-center text-center md:text-left">
              <div>
                <h4 className="text-4xl font-bold text-[#4c8c6a]">100+</h4>
                <p className="text-gray-700">Happy Customers</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-[#4c8c6a]">50</h4>
                <p className="text-gray-700">Products</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-[#4c8c6a]">1 Year</h4>
                <p className="text-gray-700">Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2e4e3f] text-white px-6 py-10 rounded-t-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h5 className="font-bold mb-2 text-lg">Our Products</h5>
            <p className="hover:text-gray-300 cursor-pointer transition-colors duration-200">Oil Based Paints</p>
            <p className="hover:text-gray-300 cursor-pointer transition-colors duration-200">Water Based Paints</p>
          </div>
          <div>
            <h5 className="font-bold mb-2 text-lg">Important Links</h5>
            <a href="#products" className="block hover:text-gray-300 transition-colors duration-200">Our Products</a>
            <a href="#about" className="block hover:text-gray-300 transition-colors duration-200">About Us</a>
            <a href="#contact" className="block hover:text-gray-300 transition-colors duration-200">Contact Us</a>
          </div>
          <div>
            <h5 className="font-bold mb-2 text-lg">Get in Touch</h5>
            <p>Address- O-864 Gaur City Center, Sector 4, Greater Noida (W), Uttar Pradesh, 201009, India</p>
            <p>Email- care@sumitrapaints.com</p>
            <p>Phone- +91-7895079139</p>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-white/10 pt-4 text-xs">
          &copy; {new Date().getFullYear()} Sumitra Paints | All Rights Reserved
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/8882689139"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>

      {/* Basic CSS for fade-in animation */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
