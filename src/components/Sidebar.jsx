import React from 'react';

const Sidebar = () => (
  <aside className="bg-black text-white w-64 h-screen p-6 hidden md:block font-inter shadow-md shadow-green-900/20">
    <h2 className="text-2xl font-bold mb-8 text-green-500">Menú</h2>
    <ul className="space-y-6 text-sm font-medium">
      <li className="hover:text-green-400 cursor-pointer transition-colors flex items-center gap-2">
        <span>🏠</span> Inicio
      </li>
      <li className="hover:text-green-400 cursor-pointer transition-colors flex items-center gap-2">
        <span>🔍</span> Explorar
      </li>
      <li className="hover:text-green-400 cursor-pointer transition-colors flex items-center gap-2">
        <span>🎶</span> Tu biblioteca
      </li>
    </ul>
  </aside>
);

export default Sidebar;
