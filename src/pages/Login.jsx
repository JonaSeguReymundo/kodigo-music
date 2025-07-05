import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [authError, setAuthError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    console.log("Intentando login con:", email, password);

    try {
      await loginUser(email, password);
      console.log("Inicio de sesión exitoso");
      navigate('/dashboard');
    } catch (error) {
      console.error("Error al iniciar sesión:", error);

      if (
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/invalid-credential'
      ) {
        setAuthError("Usuario no registrado. Redirigiendo al registro...");
        setTimeout(() => navigate('/register'), 2000);
      } else if (error.code === 'auth/wrong-password') {
        setAuthError("Contraseña incorrecta.");
      } else if (error.code === 'auth/invalid-email') {
        setAuthError("Correo inválido.");
      } else {
        setAuthError(`Error desconocido: ${error.message}`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#1e1e1e] text-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-green-500 text-center">
          Iniciar sesión en Kodigo Music
        </h2>

        <input
          {...register("email", { required: "El correo es requerido" })}
          placeholder="Correo"
          className="mb-4 w-full p-3 bg-[#2a2a2a] text-white rounded border border-[#444] focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>}

        <input
          type="password"
          {...register("password", { required: "La contraseña es requerida" })}
          placeholder="Contraseña"
          className="mb-4 w-full p-3 bg-[#2a2a2a] text-white rounded border border-[#444] focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>}

        {authError && <p className="text-red-500 text-sm mb-4">{authError}</p>}

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 transition-colors py-2 rounded font-semibold"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
