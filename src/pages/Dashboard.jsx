import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex min-h-screen bg-[#121212] text-white font-sans">
      <Sidebar />
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Bienvenido, {user?.email}</h1>

        <div className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg">
          <p className="text-lg mb-4">
            Esta es tu vista principal. Aquí podrías mostrar canciones, playlists, artistas, etc.
          </p>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 transition-colors text-white px-5 py-2 rounded-lg"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
