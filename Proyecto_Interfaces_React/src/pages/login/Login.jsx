import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import { useState } from "react"
import { loginUser } from "../../services/authService"
import { useNavigate, Link} from "react-router-dom"
import "./Login.css"

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate();

    const handleSubmit= async(e) =>{
        e.preventDefault();
        try {
            await loginUser(email,password);
            alert("Inicio de sesion exitoso")
            navigate("/planificador");
        } catch (error) {
            console.error(error)
            alert("Correo o contraseña incorrectos")
        }
    };
    return (
        <>
            <Header/>
            <section className="login__container">
                <h3 className="login__title" >Inicio de sesión</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">

                    <div className="relative w-full h-[50px] mb-4">
                        <input type="email" className="w-full h-full rounded-[40px] text-[16px]" placeholder="Correo electronico" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        <i className='bx  bxs-user absolute right-[20px] top-1/2 -translate-y-1/2 text-[20px]'></i>
                    </div>

                    

                    <div className="relative w-full h-[50px] mb-2">
                        <input type="password" className="w-full h-full border-2 rounded-[40px] text-[16px]" placeholder="Contraseña" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                        <i className="bx bxs-lock absolute right-[20px] top-1/2 -translate-y-1/2 text-[20px]"></i>
                    </div>
                    

                    <button type="submit">Ingresar</button>

                    <div className="register-link">
                        <p>
                            ¿No tienes una cuenta? <Link to="/register">Registrarse</Link>
                        </p>
                    
                    </div>
                </form>

            </section>
            <Footer/>
        </>

    )
}

export default Login