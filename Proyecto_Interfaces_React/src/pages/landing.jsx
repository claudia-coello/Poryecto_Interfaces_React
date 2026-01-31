import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import "../estilos/landing.css";
// import fondo from "../videos/fondo_index.mp4";

// imagenes
import focusIcon from "../assets/focus.png";
import planificadorIcon from "../assets/planificador.png";
import ahorroIcon from "../assets/ahorro-de-dinero.png";
import concentracionIcon from "../assets/concentracion.png";

const Landing = () => {
    const toggleCard = (e) => {
        const card = e.currentTarget;
        card.classList.toggle("active");
    };

    return (
        <>
            <Header />
            <div className="cuerpo">
                <div className="hero">
                    <video
                        className="video-bg"
                        autoPlay
                        muted
                        loop
                        playsInline
                    > <source src="/videos/fondo_index.mp4" type="video/mp4"/></video>
                    
                    <div className="contenido">
                        <h1>Organiza tu tiempo</h1>
                        <h2>Gestiona tu propio organizador en línea.</h2>
                    </div>
                </div>

                <div className="cards-container">
                    {/* Tarjeta 1 */}
                    <div className="card" onClick={toggleCard}>
                        <h5 className="card-title">El reloj</h5>
                        <img src={focusIcon} alt="El reloj" className="card-img" />
                        <div className="card-text">
                            <p>En base a las actividades “El Reloj” calcula el tiempo aproximado para realizarlas</p>
                            <ul>
                                <li>✔ Activa descansos recurrentes</li>
                                <li>✔ Botón de inicio</li>
                            </ul>
                        </div>
                    </div>

                    {/* Tarjeta 2 */}
                    <div className="card" onClick={toggleCard}>
                        <h5 className="card-title">Planificador de Tareas</h5>
                        <img src={planificadorIcon} alt="Planificador" className="card-img" />
                        <div className="card-text">
                            <p>Organiza tu día de forma práctica y productiva:</p>
                            <ul>
                                <li>✔ Crea tareas</li>
                                <li>✔ Controla tu progreso</li>
                                <li>✔ Gestiona tu tiempo con el temporizador</li>
                                <li>✔ Intervalos integrados</li>
                            </ul>
                        </div>
                    </div>

                    {/* Tarjeta 3 */}
                    <div className="card">
                        <h5 className="card-title">Concéntrate Mejor</h5>
                        <img src={concentracionIcon} alt="Concentrate con nosotros" />
                        <div className="card-text">
                            <p>Evita las interrupciones mientras nos utilizas.</p>
                            <ul>
                                <li>✔ Cero distracciones</li>
                                <li>✔ Música relajante</li>
                                <li>✔ Completamente intuitivo</li>
                            </ul>
                        </div>
                    </div>

                    {/* Tarjeta 4 */}
                    <div className="card">
                        <h5 className="card-title">Precios Accesibles</h5>
                        <img src={ahorroIcon} alt="Ahorra con nosotros" className="card-img" />
                        <div className="card-text">
                            <p>Trabaja completamente gratis o con nuestros servicios extra.</p>
                            <ul>
                                <li>✔ Precios accesibles</li>
                                <li>✔ Sin publicidad</li>
                                <li>✔ Completamente seguro</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Landing;
