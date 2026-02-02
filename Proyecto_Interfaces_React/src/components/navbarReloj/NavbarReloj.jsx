import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebase"; 
import { doc, getDoc } from "firebase/firestore";
import "./NavbarReloj.css";

function NavbarReloj() {
  const [open, setOpen] = useState(false);
  const [fotoPerfil, setFotoPerfil] = useState(""); // estado para la foto
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // 🔹 Cargar foto de perfil desde Firestore
  useEffect(() => {
    const fetchFotoPerfil = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setFotoPerfil(data.fotoPerfil || ""); // si no hay, queda vacío
        }
      }
    };
    fetchFotoPerfil();
  }, []);

  // 🔹 Cerrar si se hace click fuera
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

          {/* 🔹 Foto de perfil dinámica */}
          <img
            src={fotoPerfil || "/iconos/profile.jpg"} // si no hay foto, usa la default
            alt="Perfil"
            className="avatar-img"
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
                  localStorage.removeItem("username");
                  navigate("/");
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
