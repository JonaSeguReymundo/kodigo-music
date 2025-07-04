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
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>

      <input
        {...register("email", { required: "El correo es requerido" })}
        placeholder="Correo"
        className="input mb-2 w-full p-2 border border-gray-300 rounded"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input
        type="password"
        {...register("password", { required: "La contraseña es requerida" })}
        placeholder="Contraseña"
        className="input mb-2 w-full p-2 border border-gray-300 rounded"
      />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}

      {authError && <p className="text-red-500 mb-2">{authError}</p>}

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded w-full"
      >
        Entrar
      </button>
    </form>
  );
};

export default Login;
