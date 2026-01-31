import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const PlanesServicio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section
        id="servicios"
        className="relative flex-1 flex flex-col justify-center bg-[#243a63] text-center px-[20px] overflow-hidden"
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

        {/* Título */}
        <h2 className="relative z-10 text-white text-3xl mb-6">
          Planes de servicio
        </h2>

        {/* Planes */}
        <div className="relative z-10 flex justify-center flex-wrap gap-[30px]">

          {/* Plan Gratuito */}
          <div className="bg-[#f8d77b] text-black w-[300px] rounded-[12px] p-[20px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
            <h3 className="bg-[#243a63] text-white rounded-[8px] p-[10px]">
              Plan Gratuito
            </h3>
            <ul className="text-left my-[15px]">
              <li>Costo: $0.00</li>
              <li>Usuario individual</li>
              <li>Sincronización de un dispositivo</li>
              <li>Recordatorios básicos</li>
              <li>Incluye anuncios discretos</li>
              <li>Colaboración no disponible</li>
            </ul>
            <button className="bg-[#243a63] text-white px-[20px] py-[10px] rounded-[10px] hover:bg-[#0e1a2a]">
              Más información
            </button>
          </div>

          {/* Plan Mensual */}
          <div className="bg-[#f8d77b] text-black w-[300px] rounded-[12px] p-[20px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
            <h3 className="bg-[#243a63] text-white rounded-[8px] p-[10px]">
              Plan Mensual
            </h3>
            <ul className="text-left my-[15px]">
              <li>Costo: $4.99</li>
              <li>Sincronización multiplataforma</li>
              <li>Recordatorios avanzados</li>
              <li>5 GB en la nube</li>
              <li>Colaboración disponible</li>
              <li>Archivos ilimitados</li>
            </ul>
            <button className="bg-[#243a63] text-white px-[20px] py-[10px] rounded-[10px] hover:bg-[#0e1a2a]">
              Más información
            </button>
          </div>

          {/* Plan Anual */}
          <div className="bg-[#f8d77b] text-black w-[300px] rounded-[12px] p-[20px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
            <h3 className="bg-[#243a63] text-white rounded-[8px] p-[10px]">
              Plan Anual
            </h3>
            <ul className="text-left my-[15px]">
              <li>Costo: $49.99</li>
              <li>Funciones del plan mensual</li>
              <li>Soporte prioritario</li>
              <li>Acceso anticipado</li>
              <li>Funciones de administrador</li>
            </ul>
            <button className="bg-[#243a63] text-white px-[20px] py-[10px] rounded-[10px] hover:bg-[#0e1a2a]">
              Más información
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlanesServicio;
