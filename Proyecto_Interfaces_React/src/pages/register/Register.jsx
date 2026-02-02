import { useNavigate, Link, useLocation } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useState } from 'react';
import { registerUser } from '../../services/authService';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase'; 
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fotoPerfil] = useState(""); 
  const [descripcion] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const plan = location.state?.plan || "FREE"; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("La contraseña es muy corta (mínimo 6 caracteres)");
      return;
    }

    try {
      const userCredential = await registerUser(email, password);
      const user = userCredential.user;

      // Guardar datos adicionales en Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        plan: plan,
        fotoPerfil: fotoPerfil,
        descripcion: descripcion,
      });

      alert("Usuario registrado con éxito");
      navigate("/dashboard");
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert("Este correo ya está registrado.");
      } else {
        alert("Error al registrar: " + error.message);
      }
    }
  };

  return (
    <div>
      <Header />
      <section className="register__container">
        <h3 className="register__title">Registro</h3>
        <h4 className='p-9 text-[18px] text-center font-normal'>Comienza a organizarte con FixTime!</h4>

        <form onSubmit={handleSubmit}>
          <div className='relative w-full h-[50px] mb-4'>
            <input 
              type="email"
              className='w-full h-full border-2 rounded-[40px] text-[16px]' 
              placeholder='Correo electrónico' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <i className='bx bxs-user absolute right-[20px] top-1/2 -translate-y-1/2 text-[20px]'></i>
          </div>

          <div className='relative w-full h-[50px] mb-2'>
            <input 
              type="password" 
              className='w-full h-full border-2 rounded-[40px] text-[16px]'
              placeholder='Contraseña' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <i className="bx bxs-lock absolute right-[20px] top-1/2 -translate-y-1/2 text-[20px]"></i>
          </div>

          <button type='submit'>Registrarse</button>
          <div className="register-link">
            <p>
              ¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
            </p>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Register;
