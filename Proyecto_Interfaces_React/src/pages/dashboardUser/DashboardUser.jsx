import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Simulado (luego puede venir de Firestore)
  const plan = "Premium";
  const activities = ["Estudiar React", "Reunión grupal", "Pomodoro 25min"];

  return (
    <div>
      <h1>Bienvenido, {user.displayName || user.email}</h1>
      <p>Plan actual: {plan}</p>

      <button onClick={() => navigate("/pomodoro")}>
        Ir al Reloj
      </button>

      <button onClick={() => navigate("/activities")}>
        Ver Actividades
      </button>

      <h3>Actividades guardadas</h3>
      <ul>
        {activities.map((act, i) => (
          <li key={i}>{act}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
