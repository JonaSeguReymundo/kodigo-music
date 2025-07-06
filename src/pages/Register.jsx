import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [authError, setAuthError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    setAuthError('');
    setIsSubmitting(true);

    try {
      await registerUser(email, password);
      navigate('/dashboard');
    } catch (error) {
      // Puedes mejorar aquí con códigos de error específicos si los tienes
      setAuthError('Error al registrarse. Intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-[#1e1e1e] text-white rounded-lg mt-12 font-inter"
    >
      <h2 className="text-2xl font-bold mb-6 text-green-500 text-center">Crear cuenta</h2>

      <input
        type="email"
        autoComplete="email"
        aria-invalid={errors.email ? 'true' : 'false'}
        {...register('email', { required: 'El correo es requerido' })}
        placeholder="Correo"
        className="mb-4 w-full p-3 bg-[#2a2a2a] text-white rounded border border-[#444] focus:outline-none focus:ring-2 focus:ring-green-500"
        disabled={isSubmitting}
      />
      {errors.email && (
        <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>
      )}

      <input
        type="password"
        autoComplete="new-password"
        aria-invalid={errors.password ? 'true' : 'false'}
        {...register('password', {
          required: 'La contraseña es requerida',
          minLength: {
            value: 6,
            message: 'La contraseña debe tener al menos 6 caracteres',
          },
        })}
        placeholder="Contraseña"
        className="mb-4 w-full p-3 bg-[#2a2a2a] text-white rounded border border-[#444] focus:outline-none focus:ring-2 focus:ring-green-500"
        disabled={isSubmitting}
      />
      {errors.password && (
        <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>
      )}

      {authError && <p className="text-red-500 text-sm mb-4">{authError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-2 rounded font-semibold transition-colors ${
          isSubmitting
            ? 'bg-green-300 cursor-not-allowed'
            : 'bg-green-500 hover:bg-green-600'
        } text-white`}
      >
        {isSubmitting ? 'Registrando...' : 'Registrarse'}
      </button>
    </form>
  );
};

export default Register;
