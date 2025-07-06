import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTachometerAlt, FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center border-b border-gray-800 font-inter">
      <h1 className="text-2xl font-bold text-green-500">Kodigo Music</h1>

      <div className="space-x-6 text-sm font-medium flex items-center">
  <Link
    to="/"
    className="hover:text-green-400 transition-colors flex items-center gap-1 leading-none"
  >
    <FaHome className="text-base" /> Inicio
  </Link>
  <Link
    to="/dashboard"
    className="hover:text-green-400 transition-colors flex items-center gap-1 leading-none"
  >
    <FaTachometerAlt className="text-base" /> Dashboard
  </Link>
  <Link
    to="/login"
    className="hover:text-green-400 transition-colors flex items-center gap-1 leading-none"
  >
    <FaSignInAlt className="text-base" /> Login
  </Link>
</div>

    </nav>
  );
};

export default Navbar;
