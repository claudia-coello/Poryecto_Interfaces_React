import { useState, useRef, useEffect } from "react";
import {Link, useNavigate } from "react-router-dom";
import "./NavbarReloj.css";

function NavbarReloj() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Cerrar si se hace click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <a href="#" className="logo">
        Fix<span>Time</span>
      </a>

      <div className="menu">
        <Link to="/planificador">Planificador</Link>
        <Link to="/pomodoro">Reloj Pomodoro</Link>
        <div className="profile" ref={menuRef}>
          <button
            className="profile-btn"
            onClick={() => setOpen(!open)}
          >
            Opciones
          </button>

          <img
            src="/iconos/profile.jpg"
            alt="Perfil"
          />

          {open && (
            <div className="dropdown">
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/dashboard");
                }}
              >
                Perfil
              </button>

              <button
              className="logout"
              onClick={() => {
                setOpen(false); // Cierra el menú desplegable
                // 1. Borrar los datos de sesión (opcional pero recomendado)
                localStorage.removeItem('username'); 
                // 2. Redirigir al Login
                navigate("/"); 
                }}
                >Salir</button>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}

export default NavbarReloj;