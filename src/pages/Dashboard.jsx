import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex min-h-screen bg-[#121212] text-white font-inter">
      <Sidebar />
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 text-green-500">
          Bienvenido, {user?.email}
        </h1>

        <div className="bg-black p-6 rounded-xl shadow-md shadow-green-900/30">
          <p className="text-lg mb-4 text-gray-300">
            Esta es tu vista principal. Aquí podrías mostrar canciones, playlists, artistas, etc.
          </p>

          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 transition-colors text-white px-5 py-2 rounded-lg shadow-md shadow-red-800/40"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
