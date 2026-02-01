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
            navigate("/dashboard");
        } catch (error) {
            console.error(error)
            alert("Correo o contraseña incorrectos")
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
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

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