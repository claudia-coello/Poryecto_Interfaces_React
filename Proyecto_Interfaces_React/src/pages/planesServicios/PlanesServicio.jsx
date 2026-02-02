import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import PlanCard from "../../components/plancard/PlanCard.jsx";
const PlanesServicio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section
        id="servicios"
        className="relative flex-1 min-h-screen flex flex-col justify-center bg-[#243a63] text-center px-[20px] overflow-hidden"
      >
        {/* Video de fondo */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/reloj_arena.mp4" type="video/mp4" />
        </video>

        {/* Overlay oscuro para contraste */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />

        {/* Título */}
        <h2 className="relative z-10 text-white text-3xl mb-6">
          Planes de servicio
        </h2>

        {/* Planes */}
        <div className="relative z-10 flex justify-center flex-wrap gap-[30px]">
          <PlanCard
            plan="FREE"
            costo="$0.00"
            beneficios={[
              "Usuario individual",
              "Sincronización de un dispositivo",
              "Recordatorios básicos",
              "Incluye anuncios discretos",
              "Colaboración no disponible",
            ]}
          />
          <PlanCard
            plan="PRO"
            costo="$4.99"
            beneficios={[
              "Sincronización multiplataforma",
              "Recordatorios avanzados",
              "5 GB en la nube",
              "Colaboración disponible",
              "Archivos ilimitados",
              "Acceso por un mes",
            ]}
          />
          <PlanCard
            plan="ULTRA"
            costo="$49.99"
            beneficios={[
              "Funciones del plan Pro",
              "Soporte prioritario",
              "Acceso anticipado",
              "Funciones de administrador",
              "50 GB en la nube",
              "Acceso por un año",
            ]}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlanesServicio;
