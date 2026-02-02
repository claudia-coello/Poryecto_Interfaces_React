import { useEffect } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import VideoBackground from "../../components/videoBackground/VideoBackGround";
import "./landing.css";

// imágenes
import focusIcon from "../../assets/focus.png";
import planificadorIcon from "../../assets/planificador.png";
import ahorroIcon from "../../assets/ahorro-de-dinero.png";
import concentracionIcon from "../../assets/concentracion.png";


const Landing = () => {

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("active", entry.isIntersecting);
        });
      },
      { threshold: 0.6 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      {/* VIDEO GLOBAL DE FONDO */}
      <VideoBackground src="/videos/fondo_index.mp4" />

      <main className="cuerpo">

        {/* HERO */}
        <section className="hero">
          <div className="contenido">
            <h1>Organiza tu tiempo</h1>
            <h2>Gestiona tu propio organizador en línea.</h2>
          </div>
        </section>

        {/* TARJETAS */}
        <section className="cards-container">
          <div className="card">
            <h5 className="card-title">El reloj</h5>
            <img src={focusIcon} alt="El reloj" className="card-img" />
            <div className="card-text">
              <p>
                En base a las actividades “El Reloj” calcula el tiempo aproximado
                para realizarlas
              </p>
              <ul>
                <li>✔ Activa descansos recurrentes</li>
                <li>✔ Botón de inicio</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h5 className="card-title">Planificador de Tareas</h5>
            <img src={planificadorIcon} alt="Planificador" className="card-img" />
            <div className="card-text">
              <p>Organiza tu día de forma práctica y productiva:</p>
              <ul>
                <li>✔ Crea tareas</li>
                <li>✔ Controla tu progreso</li>
                <li>✔ Gestiona tu tiempo</li>
                <li>✔ Intervalos integrados</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h5 className="card-title">Concéntrate Mejor</h5>
            <img src={concentracionIcon} alt="Concentración" className="card-img" />
            <div className="card-text">
              <p>Evita las interrupciones mientras trabajas.</p>
              <ul>
                <li>✔ Cero distracciones</li>
                <li>✔ Música relajante</li>
                <li>✔ Interfaz limpia</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h5 className="card-title">Precios Accesibles</h5>
            <img src={ahorroIcon} alt="Ahorro" className="card-img" />
            <div className="card-text">
              <p>Usa el sistema gratis o accede a funciones premium.</p>
              <ul>
                <li>✔ Plan gratuito</li>
                <li>✔ Sin publicidad</li>
                <li>✔ Datos seguros</li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Landing;
