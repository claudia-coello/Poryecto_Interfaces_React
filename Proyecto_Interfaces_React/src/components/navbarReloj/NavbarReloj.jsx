import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
        <a href="#">Planificador</a>

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
                  setOpen(false);
                  // aquí luego puedes poner lógica de logout
                }}
              >
                Salir
              </button>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}

export default NavbarReloj;