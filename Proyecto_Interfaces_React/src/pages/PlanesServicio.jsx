import Footer from "../components/footer/footer";
import Header from "../components/header/header";
const PlanesServicio = () => {
  return (
    <>
    <Header></Header>
      <section
        id="servicios"
        className="bg-[#243a63] text-center py-[40px] px-[20px]"
      >
        <h2>Planes de servicio</h2>

        <div className="flex justify-center flex-wrap gap-[30px] relative z-[50] planes-container">

          {/* Plan Gratuito */}
          <div className="plan relative z-[50] bg-[#f8d77b] text-black w-[300px] rounded-[12px] p-[20px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
            <h3 className="bg-[#243a63] text-white rounded-[8px] p-[10px]">
              Plan Gratuito
            </h3>
            <ul className="text-left list-none p-0 my-[15px]">
              <li className="mb-2">Costo: $0.00</li>
              <li className="mb-2">Usuario individual</li>
              <li className="mb-2">Sincronización de un dispositivo</li>
              <li className="mb-2">Recordatorios básicos</li>
              <li className="mb-2">Incluye anuncios discretos</li>
              <li className="mb-2">Colaboración no disponible</li>
            </ul>
            <button className="bg-[#243a63] text-white border-0 px-[20px] py-[10px] rounded-[10px] cursor-pointer transition-colors duration-300 hover:bg-[#0e1a2a]">
              Más información
            </button>
          </div>

          {/* Plan Mensual */}
          <div className="plan relative z-[50] bg-[#f8d77b] text-black w-[300px] rounded-[12px] p-[20px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
            <h3 className="bg-[#243a63] text-white rounded-[8px] p-[10px]">
              Plan Mensual
            </h3>
            <ul className="text-left list-none p-0 my-[15px]">
              <li className="mb-2">Costo: $4.99</li>
              <li className="mb-2">Sincronización multiplataforma</li>
              <li className="mb-2">Recordatorios avanzados</li>
              <li className="mb-2">5 GB de espacio en la nube</li>
              <li className="mb-2">Colaboración disponible</li>
              <li className="mb-2">Archivos activos ilimitados</li>
            </ul>
            <button className="bg-[#243a63] text-white border-0 px-[20px] py-[10px] rounded-[10px] cursor-pointer transition-colors duration-300 hover:bg-[#0e1a2a]">
              Más información
            </button>
          </div>

          {/* Plan Anual */}
          <div className="relative z-[50] bg-[#f8d77b] text-black w-[300px] rounded-[12px] p-[20px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
            <h3 className="bg-[#243a63] text-white rounded-[8px] p-[10px]">
              Plan Anual
            </h3>
            <ul className="text-left list-none p-0 my-[15px]">
              <li className="mb-2">Costo: $49.99</li>
              <li className="mb-2">Funciones del plan mensual</li>
              <li className="mb-2">Soporte de alta prioridad</li>
              <li className="mb-2">Acceso temprano a funciones especiales</li>
              <li className="mb-2">Funciones de administrador</li>
            </ul>
            <button className="bg-[#243a63] text-white border-0 px-[20px] py-[10px] rounded-[10px] cursor-pointer transition-colors duration-300 hover:bg-[#0e1a2a]">
              Más información
            </button>
          </div>

        </div>
      </section>

      <div id="area"></div>

      
    <Footer></Footer>
    </>
  );
};

export default PlanesServicio;
