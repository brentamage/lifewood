import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'password') {
      setError('');
      alert('Logged in successfully!');
      navigate('/admin-dashboard'); // Redirect to dashboard
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background: 'linear-gradient(135deg, #f5eedb 0%, #d7d0b9 100%)',
      }}
    >
      <div
        className="w-full max-w-md rounded-3xl p-10 shadow-2xl backdrop-blur-sm bg-white/70 border border-[#133020]/40"
        style={{ boxShadow: '0 8px 24px rgba(19,48,32,0.3)' }}
      >
        <h2 className="text-4xl font-extrabold text-[#133020] mb-12 text-center tracking-wide">
          Admin Login
        </h2>

        {error && (
          <p className="text-center text-red-600 font-semibold mb-6 select-none animate-pulse">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <label
            htmlFor="username"
            className="block mb-3 font-semibold text-[#133020] tracking-wide text-lg"
          >
            Username
          </label>
          <input
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
            placeholder="Enter your username"
            className="
              w-full mb-8 px-6 py-4
              border-2 border-[#133020] rounded-xl
              placeholder-[#999] text-[#133020]
              font-medium text-lg
              transition-all duration-300
              focus:outline-none focus:ring-4 focus:ring-[#FFB347] focus:border-[#FFB347]
              hover:border-[#FFB347]
              shadow-sm hover:shadow-md
              "
          />

          <label
            htmlFor="password"
            className="block mb-3 font-semibold text-[#133020] tracking-wide text-lg"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
            className="
              w-full mb-10 px-6 py-4
              border-2 border-[#133020] rounded-xl
              placeholder-[#999] text-[#133020]
              font-medium text-lg
              transition-all duration-300
              focus:outline-none focus:ring-4 focus:ring-[#FFB347] focus:border-[#FFB347]
              hover:border-[#FFB347]
              shadow-sm hover:shadow-md
              "
          />

          <button
            type="submit"
            className="
              w-full
              bg-gradient-to-r from-[#FFB347] to-[#e89d36]
              text-[#133020] font-extrabold text-xl
              py-4 rounded-2xl
              shadow-lg hover:shadow-2xl
              transition-all duration-300
              hover:brightness-110
              active:scale-95
              "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
