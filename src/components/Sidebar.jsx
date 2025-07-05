import React from 'react';

const Sidebar = () => (
  <aside className="bg-[#000000] text-white w-64 h-screen p-6 hidden md:block">
    <h2 className="text-2xl font-bold mb-8 text-green-500">Menú</h2>
    <ul className="space-y-4 text-sm">
      <li className="hover:text-green-400 cursor-pointer">🏠 Inicio</li>
      <li className="hover:text-green-400 cursor-pointer">🔍 Explorar</li>
      <li className="hover:text-green-400 cursor-pointer">🎶 Tu biblioteca</li>
    </ul>
  </aside>
);

export default Sidebar;
