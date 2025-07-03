import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Bienvenido, {user?.email}</h1>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
