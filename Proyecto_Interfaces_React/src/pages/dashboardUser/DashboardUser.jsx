import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./DashboardUser.css";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const plan = "Premium";
  const activities = ["Estudiar React", "Reunión grupal", "Pomodoro 25min"];

  return (
    <div className="dashboard-wrapper">
      <div className="contenedor-pomodoro dashboard-card">
        <h1 className="dashboard-title">
          Bienvenido, <span>{user.displayName || user.email}</span>
        </h1>

        <p className="dashboard-plan">
          Plan actual: <strong>{plan}</strong>
        </p>

        <div className="botones-pomodoro dashboard-buttons">
          <button onClick={() => navigate("/pomodoro")}>
            ⏱ Ir al Reloj
          </button>

          <button onClick={() => navigate("/activities")}>
            📋 Ver Actividades
          </button>
        </div>

        <h3 className="dashboard-subtitle">Actividades guardadas</h3>

        <ul className="dashboard-list">
          {activities.map((act, i) => (
            <li key={i}>{act}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

