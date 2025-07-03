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
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Registrarse</h2>
      <input {...register("email", { required: true })} placeholder="Correo" className="input mb-2" />
      {errors.email && <p>El correo es requerido</p>}
      <input type="password" {...register("password", { required: true, minLength: 6 })} placeholder="Contraseña" className="input mb-2" />
      {errors.password && <p>La contraseña es requerida (mín. 6 caracteres)</p>}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Crear cuenta</button>
    </form>
  );
};

export default Register;
