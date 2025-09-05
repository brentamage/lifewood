import React from 'react';

function AboutPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-8 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(245, 238, 219, 0.85), rgba(245, 238, 219, 0.85)), url('/path-to-your-background-image.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="max-w-4xl bg-white bg-opacity-90 rounded-3xl border border-[#e6dcc6] p-14 shadow-2xl backdrop-blur-sm transform transition-transform duration-500 hover:scale-[1.02]"
        style={{ boxShadow: '0 20px 40px rgba(19, 48, 32, 0.15)' }}
      >
        <h1 className="text-5xl font-extrabold text-[#133020] mb-10 text-center tracking-wider relative inline-block">
          About Lifewood
          <span className="block w-20 h-1 mx-auto mt-4 rounded-full bg-[#FFB347] shadow-lg animate-underline"></span>
        </h1>
        <p className="text-[#133020] text-xl leading-relaxed mb-8 font-medium tracking-wide">
          Lifewood Data Technology is a global leader in data-driven innovation. We harness the power of AI to transform industries and create a better tomorrow. Our mission is to provide cutting-edge solutions that empower businesses to unlock the true potential of their data.
        </p>
        <p className="text-[#133020] text-xl leading-relaxed font-medium tracking-wide">
          Founded by a team of data scientists and engineers, Lifewood is committed to ethical AI, continuous research, and exceptional project delivery.
        </p>
      </div>

      <style>
        {`
          @keyframes underline {
            0% {
              width: 0;
              opacity: 0;
            }
            50% {
              width: 20rem;
              opacity: 1;
            }
            100% {
              width: 5rem;
              opacity: 1;
            }
          }

          .animate-underline {
            animation: underline 1.5s ease forwards;
          }
        `}
      </style>
    </div>
  );
}

export default AboutPage;
