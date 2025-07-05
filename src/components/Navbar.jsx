import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#000000] text-white px-6 py-4 flex justify-between items-center border-b border-gray-800 shadow-sm">
      <h1 className="text-2xl font-bold text-white-500">Kodigo Music</h1>
      <div className="space-x-6 text-sm font-medium">
  <Link to="/" className="hover:text-green-400 transition-colors">Inicio</Link>
  <Link to="/dashboard" className="hover:text-green-400 transition-colors">Dashboard</Link>
  <Link to="/login" className="hover:text-green-400 transition-colors">Login</Link>
</div>

    </nav>
  );
};

export default Navbar;
