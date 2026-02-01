import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./DashboardUser.css";
import bgVideo from "../../assets/videos/vid_dashboard_user.mp4";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

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

            <button>Cambiar información</button>
            <button className="secondary">Cerrar sesión</button>
            <button className="danger">Eliminar usuario</button>
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
              <button className="upgrade">Mejorar</button>
            </div>

            <div className="description-box">
              <span>Descripción:</span>
              <p>
                Aquí puede ir una descripción del usuario, estadísticas,
                progreso o información relevante del sistema.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


