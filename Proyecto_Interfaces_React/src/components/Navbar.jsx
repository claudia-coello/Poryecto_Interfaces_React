function Navbar() {
  return (
    <nav className="w-full py-4 px-8 bg-[#0e1a2a] flex justify-between items-center box-border">
      <a href="#" className="text-[26px] text-white no-underline font-bold">
        Fix<span className="text-[#f4c542]">Time</span>
      </a>

      <div className="flex items-center gap-[30px]">
        <a
          href="../../pages/planificador/Planificador.jsx"
          className="no-underline text-white text-base px-3 py-2 transition duration-300 hover:text-[#f4c542]"
        >
          Planificador
        </a>

        <div className="flex items-center gap-2 relative">
          <button className="bg-transparent text-white border-0 text-base cursor-pointer">
            Opciones
          </button>

          <img
            src="/iconos/profile.jpg"
            alt="Perfil"
            className="w-9 h-9 rounded-full object-cover border-2 border-[#243a63]"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
