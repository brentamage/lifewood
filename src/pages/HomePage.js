import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative flex flex-col justify-center items-center"
      style={{
        backgroundImage: 'url("/images/AI3.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Soft Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: '#f5eedb', opacity: 0.85 }}
      ></div>

      {/* Content Box */}
      <div
        className="z-10 text-center px-10 py-14 rounded-2xl max-w-2xl backdrop-blur-md animate-fadeIn"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          border: '2px solid #133020',
          boxShadow: '0 20px 45px rgba(19, 48, 32, 0.25)',
        }}
      >
        <h1
          className="text-5xl sm:text-6xl font-extrabold mb-4"
          style={{
            color: '#133020',
            letterSpacing: '1px',
            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          Welcome to Lifewood
        </h1>

        <p className="text-lg sm:text-xl mb-6 text-[#133020] font-medium">
          Shaping the future with AI and data-driven innovation.
        </p>

        <p
          className="mb-10 text-base sm:text-lg leading-relaxed font-normal text-[#133020]"
        >
          Lifewood is a global leader dedicated to impactful AI and data-driven
          solutions that change the world.
        </p>

        <Link
          to="/apply"
          className="inline-block py-3 px-8 text-lg font-semibold rounded-md transition-all duration-300 shadow-md transform hover:scale-105"
          style={{
            backgroundColor: '#133020',
            color: '#ffffff',
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = '#FFB347')
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = '#133020')
          }
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
