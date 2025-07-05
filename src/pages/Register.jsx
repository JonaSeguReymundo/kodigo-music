import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      await registerUser(email, password);
      navigate('/dashboard');
    } catch (error) {
      alert('Error al registrarse');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-[#1e1e1e] text-white rounded-lg mt-12">
      <h2 className="text-2xl font-bold mb-6 text-green-500">Crear cuenta</h2>

      <input
        {...register("email", { required: true })}
        placeholder="Correo"
        className="mb-4 w-full p-2 bg-[#2a2a2a] text-white rounded border border-[#444]"
      />
      {errors.email && <p className="text-red-500 text-sm mb-2">El correo es requerido</p>}

      <input
        type="password"
        {...register("password", { required: true, minLength: 6 })}
        placeholder="Contraseña"
        className="mb-4 w-full p-2 bg-[#2a2a2a] text-white rounded border border-[#444]"
      />
      {errors.password && <p className="text-red-500 text-sm mb-2">La contraseña debe tener al menos 6 caracteres</p>}

      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full"
      >
        Registrarse
      </button>
    </form>
  );
};

export default Register;
