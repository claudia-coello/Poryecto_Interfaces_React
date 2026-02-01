import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateProfile, deleteUser } from "firebase/auth";
import "./DashboardUser.css";
import bgVideo from "../../assets/videos/vid_dashboard_user.mp4";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState(false);
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [description, setDescription] = useState("");

  const handleSaveInfo = async () => {
    try {
      await updateProfile(user, {
        displayName: displayName,
      });
      setShowEdit(false);
    } catch (error) {
      console.error("Error al actualizar perfil:", error);
    }
  };
  const handleDeleteUser = async () => {
    try {
      await deleteUser(user);
      navigate("/");
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  const [showPlans, setShowPlans] = useState(false);



  return (
    <div className="dashboard-video-wrapper">
      {/* VIDEO DE FONDO */}
      <video
        className="background-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* CONTENIDO DEL DASHBOARD */}
      <div className="dashboard-page">
        {/* NAVBAR */}
        <nav className="dashboard-navbar">
          <a href="#" className="logo">Fix<span>time</span></a>
          <div className="nav-links">
            <button onClick={() => navigate("/pomodoro")}>Reloj</button>
            <button onClick={() => navigate("/activities")}>Planificador</button>
          </div>
        </nav>

        {/* CONTENIDO */}
        <div className="dashboard-content">
          {/* PERFIL */}
          <aside className="profile-card">
            <div className="avatar">Foto User</div>

            <button onClick={() => setShowEdit(true)}>Cambiar información</button>

            {showEdit && (
              <div className="modal">
                <h3>Editar información</h3>

                <div className="edit-box">
                  <label>Nombre</label>
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Escribe tu nombre"
                  />

                  <label>Descripción</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Escribe tu descripción"
                  />
                </div>

                <button onClick={handleSaveInfo}>Guardar</button>
                <button onClick={() => setShowEdit(false)}>Cancelar</button>
              </div>
            )}

            <button className="secondary" onClick={() => {
              logout();
              navigate("/");
            }}>
              Cerrar sesión
            </button>

            <button className="danger" onClick={handleDeleteUser}>
              Eliminar usuario
            </button>
          </aside>

          {/* INFO */}
          <section className="info-card">
            <div className="info-row">
              <span>Usuario:</span>
              <strong>{user.displayName || user.email}</strong>
            </div>

            <div className="info-row plan-row">
              <span>Tipo de plan:</span>
              <strong>Premium</strong>
              <button className="upgrade" onClick={() => setShowPlans(!showPlans)}>
                Mejorar
              </button>
              {showPlans && (
                <div className="plans-menu">
                  <button onClick={() => alert("Plan FREE seleccionado")}>FREE</button>
                  <button onClick={() => alert("Plan Pro seleccionado")}>Pro</button>
                  <button onClick={() => alert("Plan Ultra seleccionado")}>Ultra</button> </div>
              )}
            </div>

            <div className="description-box">
              <span>Descripción:</span>
              <p>
                {description || "No has añadido una descripción aún."}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


