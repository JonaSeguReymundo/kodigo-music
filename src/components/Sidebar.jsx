import React from 'react';

const Sidebar = () => (
  <aside className="bg-gray-900 text-white w-60 h-screen p-4">
    <ul className="space-y-2">
      <li className="hover:text-green-400">Inicio</li>
      <li className="hover:text-green-400">Explorar</li>
      <li className="hover:text-green-400">Tu biblioteca</li>
    </ul>
  </aside>
);

export default Sidebar;
