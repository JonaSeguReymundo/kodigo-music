import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';

const App = () => (
  <AuthProvider>
    <Router>
      <div className="bg-[#121212] min-h-screen text-white font-sans">
        <Navbar />
        <AppRouter />
      </div>
    </Router>
  </AuthProvider>
);

export default App;
