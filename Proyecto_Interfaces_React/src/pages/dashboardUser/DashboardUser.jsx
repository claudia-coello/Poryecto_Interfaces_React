import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateProfile, deleteUser} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import "./DashboardUser.css";
import bgVideo from "../../assets/videos/vid_dashboard_user.mp4";
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [showEdit, setShowEdit] = useState(false);
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [description, setDescription] = useState("");
  const [fotoPerfil, setFotoPerfil] = useState("");
  const [plan, setPlan] = useState("FREE");
  const [showPlans, setShowPlans] = useState(false);

  // 🔹 Nuevo estado para cambio de contraseña
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setDescription(data.descripcion || "");
          setFotoPerfil(data.fotoPerfil || "");
          setPlan(data.plan || "FREE");
        }
      }
    };
    fetchUserData();
  }, [user]);

  const handleSaveInfo = async () => {
    try {
      await updateProfile(user, { displayName });
      await setDoc(doc(db, "users", user.uid), {
        descripcion: description,
        fotoPerfil: fotoPerfil,
        plan: plan,
      }, { merge: true });

      setShowEdit(false);
      alert("Información actualizada correctamente");
    } catch (error) {
      console.error("Error al actualizar perfil:", error);
    }
  };

  const handleChangePlan = async (nuevoPlan) => {
    try {
      await setDoc(doc(db, "users", user.uid), { plan: nuevoPlan }, { merge: true });
      setPlan(nuevoPlan);
      setShowPlans(false);
      alert(`Plan ${nuevoPlan} actualizado`);
    } catch (error) {
      console.error("Error al cambiar plan:", error);
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

  // 🔹 Función para cambiar contraseña
  const handleChangePassword = async () => {
    try {
      if (newPassword.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return;
      }

      await updatePassword(user, newPassword);
      alert("Contraseña actualizada correctamente");
      setShowPasswordModal(false);
      setNewPassword("");
    } catch (error) {
      console.error("Error al cambiar contraseña:", error);

      if (error.code === "auth/requires-recent-login") {
        alert("Debes volver a iniciar sesión para cambiar la contraseña.");
        // Aquí puedes redirigir al login o pedir la clave actual para reautenticación
      } else {
        alert("Error: " + error.message);
      }
    }
  };

  return (
    <div className="dashboard-video-wrapper">
      <video className="background-video" src={bgVideo} autoPlay loop muted playsInline />
      <div className="dashboard-page">
        <nav className="dashboard-navbar">
          <a href="#" className="logo">Fix<span>time</span></a>
          <div className="nav-links">
            <button onClick={() => navigate("/pomodoro")}>Reloj</button>
            <button onClick={() => navigate("/planificador")}>Planificador</button>
          </div>
        </nav>

        <div className="dashboard-content">
          <aside className="profile-card">
            <div className="avatar">
              {fotoPerfil ? (
                <img src={fotoPerfil} alt="Foto de perfil" className="w-24 h-24 rounded-full object-cover" />
              ) : "Foto User"}
            </div>

            <button onClick={() => setShowEdit(true)}>Cambiar información</button>
            <button onClick={() => setShowPasswordModal(true)}>Cambiar contraseña</button>

            {showEdit && (
              <div className="modal">
                <h3>Editar información</h3>
                <div className="edit-box">
                  <label>Nombre</label>
                  <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                  <label>Descripción</label>
                  <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                  <label>Foto de perfil (URL)</label>
                  <input type="text" value={fotoPerfil} onChange={(e) => setFotoPerfil(e.target.value)} />
                </div>
                <button onClick={handleSaveInfo}>Guardar</button>
                <button onClick={() => setShowEdit(false)}>Cancelar</button>
              </div>
            )}

            {/* 🔹 Modal para cambio de contraseña */}
            {showPasswordModal && (
              <div className="modal">
                <h3>Cambiar contraseña</h3>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Nueva contraseña"
                />
                <button onClick={handleChangePassword}>Guardar</button>
                <button onClick={() => setShowPasswordModal(false)}>Cancelar</button>
              </div>
            )}

            <button className="secondary" onClick={() => { logout(); navigate("/"); }}>
              Cerrar sesión
            </button>
            <button className="danger" onClick={handleDeleteUser}>Eliminar usuario</button>
          </aside>

          <section className="info-card">
            <div className="info-row">
              <span>Usuario:</span>
              <strong>{user.displayName || user.email}</strong>
            </div>
            <div className="info-row plan-row">
              <span>Tipo de plan:</span>
              <strong>{plan}</strong>
              <button className="upgrade" onClick={() => setShowPlans(!showPlans)}>Cambiar</button>
              {showPlans && (
                <div className="plans-menu">
                  <button onClick={() => handleChangePlan("FREE")}>FREE</button>
                  <button onClick={() => handleChangePlan("PRO")}>Pro</button>
                  <button onClick={() => handleChangePlan("ULTRA")}>Ultra</button>
                </div>
              )}
            </div>
            <div className="description-box">
              <span>Descripción:</span>
              <p>{description || "No has añadido una descripción aún."}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


