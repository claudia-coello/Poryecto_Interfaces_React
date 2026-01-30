import '../estilos/estilo-reloj.css'
import Footer from "../components/footer/footer";
import Navbar from '../components/Navbar';
function Pomodoro() {
    return (
        <>
            <Navbar />
            <main className="video-background-container">
                <button className="mute-button">🔊</button>

                <video
                    id="video-fondo"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/videos/vid_fondo_reloj.mp4" type="video/mp4" />
                </video>
 

                <div className="contenedor-pomodoro">
                    <h2>Reloj Pomodoro</h2>
                    <div>25:00</div>

                    <div className="botones-pomodoro">
                        <button>Iniciar</button>
                        <button>Pausar</button>
                        <button>Reiniciar</button>
                    </div>
                </div>

                <audio loop>
                    <source src="/sonido/flurry-snow.mp3" type="audio/mpeg" />
                </audio>
            </main>

            <Footer></Footer>
        </>

    );
}

export default Pomodoro;
