import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import { useState } from "react"
import { loginUser } from "../../services/authService"
import { useNavigate, Link } from "react-router-dom"
import "./Login.css"

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await loginUser(email, password);
            alert("Inicio de sesion exitoso")
            navigate("/planificador");
        } catch (error) {
            if (error.code !== 'auth/invalid-credential') {
            console.error("Error técnico:", error);
        }
        alert("Correo o contraseña incorrectos");
        }
    };
    return (
        <>
            <Header />

            <div className="login-page">
                {/* Video de fondo */}
                <video
                    className="video-bg"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/videos/arena_dorada.mp4" type="video/mp4" />
                </video>

                {/* Contenido */}
                <section className="login__container">
                    <h3 className="login__title">Inicio de sesión</h3>

                    <form onSubmit={handleSubmit}>
                        <div className='relative w-full h-[50px] mb-4'>
                            <input
                            type="email"
                            className='w-full h-full border-2 rounded-[40px] text-[16px]'
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <i className='bx bxs-user absolute right-[20px] top-1/2 -translate-y-1/2 text-[20px]'></i>
                        </div>

                        <div className='relative w-full h-[50px] mb-4'>
                            <input
                            className='w-full h-full border-2 rounded-[40px] text-[16px]'
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                        <i className='bx bxs-lock absolute right-[20px] top-1/2 -translate-y-1/2 text-[20px]'></i>
                        </div>
                        



                        <button type="submit">Ingresar</button>

                        <p>
                            ¿No tienes una cuenta? <Link to="/register">Registrarse</Link>
                        </p>
                    </form>
                </section>
            </div>

            <Footer />
        </>


    )
}

export default Login