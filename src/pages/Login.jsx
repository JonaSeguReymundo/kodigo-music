import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      await loginUser(email, password);
      navigate('/dashboard');
    } catch (error) {
      alert('Error al iniciar sesión');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
      <input {...register("email", { required: true })} placeholder="Correo" className="input mb-2" />
      {errors.email && <p>El correo es requerido</p>}
      <input type="password" {...register("password", { required: true })} placeholder="Contraseña" className="input mb-2" />
      {errors.password && <p>La contraseña es requerida</p>}
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Entrar</button>
    </form>
  );
};

export default Login;
