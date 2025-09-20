import React, { useState, useEffect } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const heroImages = [
    "/hero-bg.jpg",
    "https://nipponpaint.co.in/wp-content/uploads/2024/09/image-13-min.jpeg",
    "https://www.giffywalls.in/cdn/shop/files/9U5Z7B_2_cdcc3baa-a3c1-4f1b-ba1d-9ddefb239091.jpg?quality=90&v=1734200062&width=1326",
    "https://www.buildingmaterialreporter.com/uploads/blogs/files/07%20(6).jpg"
  ];

  const productDescriptions = [
    [
      "Eurolite Extra Shine Emulsion -20 percent water in 1 lit Paint",
      "Bring your walls to life with a radiant glow ✨. Our high-sheen masterpiece is crafted to deliver a smooth, luxurious finish that transforms any space into a statement of style.",
      "✔ Durability you can trust: Lasts up to 5 years of brilliance.",
      "✔ Versatile beauty: Perfect for both interior elegance and exterior strength.",
      "✔ Effortless coverage: Just 1 litre paints up to 180–200 sq. ft. in a single coat.",
      "✔ Easy application: Add 30% water per litre for optimal performance and smooth spreading.",
      "With Eurolite Extra Shine, every wall becomes a canvas of lasting shine and sophistication. ✨"
    ],
    [
      "🛡️ Weather Guard – The Shield Your Walls Deserve",
      "Built to protect and beautify, Weather Guard is your ultimate defense against time and weather. Designed for both exterior strength and interior elegance, it ensures your walls stay fresh, vibrant, and protected.",
      "Superior protection: Acts as a strong guard for your walls.",
      "Dual application: Ideal for both inside and outside surfaces.",
      "Easy application: Mix 50% water per litre and apply 2 coats for best results.",
      "Washable & long-lasting: Keep your walls looking new with easy cleaning.",
      "Smart coverage: Delivers 130–150 sq. ft. per litre in a single coat.",
      "With Weather Guard, your walls don’t just shine — they stand strong against the elements. 🌦️✨"
    ],
    [
      "🎨 Axee Advance Emulsion – Style Meets Strength",
      "A perfect blend of elegance and endurance, Axee Advance Emulsion gives your walls a smooth, modern finish while keeping them strong against daily wear and tear. Just like Weather Guard, it’s built to deliver both beauty and protection for any space.",
      "Versatile application: Suitable for both interior & exterior walls.",
      "Smart coverage: 130–150 sq. ft. per litre in a single coat.",
      "Smooth finish: Leaves your walls looking stylish, fresh, and refined.",
      "With Axee Advance Emulsion, you don’t just paint walls — you add a touch of elegance that lasts. ✨"
    ],
    [
      "✨ Avon Shine – Our Most Loved Classic",
      "When it comes to trusted brilliance, nothing beats Avon Shine. As our most in-demand paint, it’s designed to bring vibrant beauty and lasting protection to every wall — inside or out.",
      "Customer favorite: The most demanded product in our range.",
      "Dual purpose: Perfect for both interior charm and exterior strength.",
      "Reliable coverage: 120 sq. ft. per litre in a single coat.",
      "Lasting appeal: A smooth, stylish finish that keeps your walls glowing.",
      "With Avon Shine, you’re not just painting — you’re choosing a trusted favorite that has earned its place in countless homes. 🏡💫"
    ],
    [
      "🌟 Super Gloss – Supreme Shine at a Smart Price",
      "Affordable yet extraordinary, Super Gloss is our supreme product in a genuine price range. While it’s technically a distemper, its premium quality rivals that of interior emulsions, giving your walls a finish that feels luxurious without the high cost.",
      "Supreme value: Premium quality at a pocket-friendly price.",
      "Interior excellence: Distemper with the look & feel of an emulsion.",
      "Easy application: Mix with ½ litre of water per kg of product for best results.",
      "Smooth & stylish finish: Keeps your interiors looking elegant and fresh.",
      "With Super Gloss, you get the shine of emulsion at the price of distemper — the smart choice for beautiful interiors. ✨"
    ],
    [
      "💎 High Gloss – Premium Finish at a Genuine Price",
      "Engineered for elegance, High Gloss is our supreme product at a genuine price point. Although classified as a distemper, its refined quality equals that of interior emulsions, offering your walls a glossy, smooth finish that looks far more premium than it costs.",
      "Great value: Premium performance at an affordable price.",
      "Emulsion-like quality: A distemper that rivals interior emulsions.",
      "Easy application: Mix with ½ litre of water per kg of product for best results.",
      "Glossy perfection: Adds a sleek, radiant touch to your interiors.",
      "With High Gloss, you don’t compromise — you enjoy luxury-quality walls at an everyday price. ✨"
    ],
    [
      "🏆 Ujjwal Gold – The Perfect Start for Lasting Shine",
      "Every great finish begins with a strong foundation. Ujjwal Gold Interior Primer is specially designed as the initial step in wall painting, applied over wall putty to create a smooth, flawless base. It enhances both coverage and shine, ensuring your walls look stunning once painted.",
      "Smooth foundation: Levels and prepares the wall surface.",
      "Enhanced coverage: Boosts paint performance and brilliance.",
      "Interior specialty: A high-quality cement-based primer crafted for interiors.",
      "Lasting finish: Helps achieve superior smoothness and long-term shine.",
      "With Ujjwal Gold, you lay the groundwork for walls that don’t just look painted — they look perfected. ✨"
    ],
    [
      "🥇 Gold Gloss – Metallic Brilliance for Your Surfaces",
      "Make every detail shine with Gold Gloss Metallic Paint. Perfect for exterior gates and decorative designs, it delivers a rich, luminous finish that catches the eye and elevates the look of any surface.",
      "Metallic elegance: Adds a sparkling, premium shine.",
      "Exterior-ready: Ideal for gates, grills, and outdoor accents.",
      "Decorative touch: Perfect for designs that demand attention and style.",
      "Durable brilliance: Keeps surfaces looking vibrant and polished.",
      "With Gold Gloss, ordinary surfaces transform into striking highlights of sophistication. ✨"
    ],
    [
      "✨ Silver Gloss – Sleek Metallic Shine for Every Surface",
      "Add a touch of elegance with Silver Gloss Metallic Paint. Ideal for exterior gates and decorative designs, it delivers a smooth, reflective finish that makes every detail stand out with sophistication.",
      "Metallic brilliance: Gives a striking, polished shine.",
      "Exterior-ready: Ideal for gates, grills, and outdoor accents.",
      "Decorative excellence: Enhances designs with a shimmering, eye-catching effect.",
      "Durable finish: Maintains vibrancy and shine over time.",
      "With Silver Gloss, ordinary surfaces are transformed into sleek highlights of style and elegance. ✨"
    ],
    [
      "✨ Gold Coat – The Ultimate Shine for Every Surface",
      "Make your designs gleam with Gold Coat, our most dazzling oil-based paint. Perfect for both interior and exterior gates, it delivers a luxurious, reflective finish that turns ordinary surfaces into stunning highlights.",
      "Maximum shine: Our most brilliant and eye-catching product.",
      "Versatile application: Ideal for interior and exterior gates and decorative accents.",
      "Oil-based durability: Long-lasting and resistant to wear.",
      "Elegant finish: Enhances every design with a golden glow.",
      "With Gold Coat, every gate and decorative element becomes a statement of sophistication and style. ✨"
    ],
    [
      "✨ Silver Touch – Sleek Aluminium Shine for Your Designs",
      "Give your surfaces a refined metallic finish with Silver Touch. Perfect for exterior gates and decorative designs, this aluminium-based paint adds a brilliant, reflective look that enhances every detail.",
      "Metallic elegance: Delivers a polished, eye-catching shine.",
      "Exterior-ready: Ideal for gates, grills, and outdoor accents.",
      "Decorative highlight: Makes designs stand out with a sleek, silver finish.",
      "Long-lasting brilliance: Keeps surfaces looking vibrant and sophisticated.",
      "With Silver Touch, every gate and design element becomes a shimmering statement of style. ✨"
    ]
  ];

  const generateProductData = () => {
    const productNames = [
      "Eurolite Extra Shine Emulsion",
      "Weather Guard Exterior Emulsion",
      "Axee Advance Exterior Emulsion ",
      "Avone Shine Exterior and Interior Emulsion",
      "Super Gloss Acrylic Distemper",
      "High Gloss Acrylic Distemper ",
      "Ujjwal Gold Interior Primer",
      "Gold Gloss Metallic Paint",
      "Silver Gloss Metallic Paint ",
      "Goldcoat Oil Base Golden Paint ",
      "Silver Touch Oil Base Alluminium Paints"
    ];

    return Array.from({ length: 11 }, (_, i) => ({
      id: i + 1,
      name: productNames[i],
      image: `/products/paint${i + 1}.jpg`,
      description: productDescriptions[i] || ["Product description not available."]
    }));
  };

  const products = generateProductData();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  useEffect(() => {
    if (currentPage === "productDetail") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    const form = event.target;
    const formData = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/xeozpege", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        if (data.errors) setError(data.errors.map(err => err.message).join(', '));
        else setError("Oops! There was a problem with your submission.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { title: "Interior Wall Painting", image: "/service1.jpg", description: "Interior paints are paints used in the interior of the building, in areas such as rooms, hallways, offices, bathrooms and kitchens." },
    { title: "Exterior Wall Painting", image: "/service2.jpg", description: "Exterior house paint is made for painting the shingles or siding of your home, not the walls of your living room, and the exterior finish of a car is on the outside." },
    { title: "Waterproofing Services", image: "/service3.jpg", description: "We offer durable and effective waterproofing coatings to protect your home from moisture and leaks." }
  ];

  const testimonials = [
    { name: "Ravi Kumar", message: "Sumitra Paints transformed our home with vibrant colors and excellent service! Highly recommend!" },
    { name: "Pooja Sharma", message: "Professional team and amazing product range. We are truly satisfied with the results." },
    { name: "Amit Verma", message: "Best paint quality I've experienced. Long-lasting and beautifully finished walls." }
  ];

  // A new function to handle the back action and scrolling
  const handleBackToProducts = () => {
    setCurrentPage("home");
    // Use a setTimeout to allow the page to re-render before scrolling
    setTimeout(() => {
      const productsSection = document.getElementById("products");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  if (currentPage === "productDetail" && selectedProduct) {
    // Pass the new handleBackToProducts function to the ProductDetailsPage component
    return <ProductDetailsPage product={selectedProduct} onBack={handleBackToProducts} />;
  }

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-[#a8d5ba] text-gray-900 p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Sumitra Paints Logo" className="w-auto h-14 md:h-20 object-contain" />
          <h1 className="text-xl md:text-2xl font-bold text-[#2e4e3f]">Sumitra Paints and Chemicals</h1>
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

      {/* Hero */}
      <section className="relative h-[60vh] md:h-[85vh] overflow-hidden">
        <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}>
          {heroImages.map((image, idx) => (
            <div key={idx} className="w-full flex-shrink-0 bg-cover bg-center relative" style={{ backgroundImage: `url('${image}')` }}>
              <div className="absolute inset-0 bg-black opacity-30" />
              {idx === 0 && (
                <h2 className="absolute bottom-10 md:bottom-1/2 right-4 md:right-16 transform md:translate-y-1/2 text-3xl md:text-5xl font-semibold leading-snug text-right z-10 drop-shadow-lg text-white">
                  Har Deewaar Ki Apni Pehchaan
                </h2>
              )}
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentSlideIndex(idx)} className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlideIndex === idx ? "bg-white" : "bg-gray-400 opacity-70"}`} aria-label={`Go to slide ${idx + 1}`}></button>
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
              Sumitra Paints is a leading paint manufacturing company based in India. Founded in 2020, we’ve become one of the finest producers of decorative, industrial, and automotive paints.
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

      {/* Exclusive Products - Updated to be clickable */}
      <section id="products" className="px-6 py-16 bg-white">
        <h3 className="text-3xl font-bold text-center text-[#4c8c6a] mb-10">Exclusive Products</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
              onClick={() => {
                setSelectedProduct(product);
                setCurrentPage("productDetail");
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain p-4"
              />
              <div className="text-center py-2 font-semibold text-gray-800 text-sm">{product.name}</div>
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
            <form
              className="bg-white text-gray-800 rounded-lg p-6 shadow space-y-4"
              onSubmit={handleFormSubmit}
              action="https://formspree.io/f/xeozpege"
              method="POST"
            >
              {isSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                  <strong className="font-bold">Success!</strong>
                  <span className="block sm:inline ml-2">Your message has been sent. Thank you!</span>
                </div>
              )}
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                  <strong className="font-bold">Error!</strong>
                  <span className="block sm:inline ml-2">{error}</span>
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-1">Name *</label>
                <input type="text" id="name" name="name" placeholder="Your Name" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c8c6a] transition-all duration-200" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-1">Email *</label>
                <input type="email" id="email" name="email" placeholder="Your Email" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c8c6a] transition-all duration-200" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-1">Phone *</label>
                <input type="tel" id="phone" name="phone" placeholder="Your Phone" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c8c6a] transition-all duration-200" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-1">Message *</label>
                <textarea id="message" name="message" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c8c6a] transition-all duration-200" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <button
                className="bg-[#4c8c6a] text-white px-6 py-3 rounded-full hover:bg-[#3a6f54] transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Now"}
              </button>
            </form>

            <div className="space-y-6 flex flex-col justify-center text-center md:text-left">
              <div>
                <h4 className="text-4xl font-bold text-[#4c8c6a]">1000+</h4>
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
            <p>Phone- +91-8882689139</p>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-white/10 pt-4 text-xs">
          &copy; {new Date().getFullYear()} Sumitra Paints | All Rights Reserved
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918882689139"
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

// Sub-component for the product details page
function ProductDetailsPage({ product, onBack }) {
  return (
    <div className="font-sans">
      <header className="bg-[#a8d5ba] text-gray-900 p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <button
          onClick={onBack}
          className="p-2 rounded-md hover:bg-[#8ec2a6] focus:outline-none focus:ring-2 focus:ring-[#4c8c6a] flex items-center gap-2"
        >
          <ArrowLeft size={24} /> <span className="hidden md:inline">Back to Products</span>
        </button>
        {/* Updated logo to have the image next to the text */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Sumitra Paints Logo" className="w-auto h-14 md:h-20 object-contain" />
          <h1 className="text-xl md:text-2xl font-bold text-[#2e4e3f]">Sumitra Paints and Chemicals</h1>
        </div>
        <div className="w-10 h-10"></div>
      </header>

      <section className="py-16 px-6 bg-white text-gray-800">
        <h2 className="text-3xl font-bold text-center text-[#4c8c6a] mb-10">{product.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img src={product.image} alt={product.name} className="rounded-lg shadow-md w-auto h-auto object-contain mx-auto max-h-[500px] mb-4 md:mb-0" />
          <div>
            <h3 className="text-2xl font-bold text-[#4c8c6a] mb-1">Product Details</h3>
            <p className="text-xl font-semibold mb-4">{product.name}</p>
            {Array.isArray(product.description) ? (
              product.description.map((line, index) => (
                <p key={index} className="leading-relaxed mb-4">{line}</p>
              ))
            ) : (
              <p className="leading-relaxed whitespace-pre-line">{product.description}</p>
            )}
          </div>
        </div>
      </section>

      {/* Footer is duplicated here to maintain page structure */}
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
            <p>Phone- +91-8882689139</p>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-white/10 pt-4 text-xs">
          &copy; {new Date().getFullYear()} Sumitra Paints | All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
