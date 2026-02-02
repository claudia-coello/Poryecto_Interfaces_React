import { useState, useEffect, useRef } from "react";
import "./Pomodoro.css";
import videoFondo from "../../assets/videos/vid_fondo_reloj.mp4";
import sonidoFlurry from "../../assets/sonido/flurry-snow.mp3";
import NavbarReloj from "../../components/navbarReloj/NavbarReloj";

const Pomodoro = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutos en segundos
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);
  const audioRef = useRef(null);
  const videoRef = useRef(null);

  // Formatear el tiempo mm:ss
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Efecto para manejar el temporizador
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev > 0) return prev - 1;
          clearInterval(timerRef.current);
          setIsRunning(false);
          alert("¡Pomodoro completado!");
          return 0;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      if (audioRef.current) {
        audioRef.current.play().catch(err => console.log("Error al reproducir: ", err))
      }
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
    audioRef.current.pause();
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <>
      <NavbarReloj />
      <div className="video-background-container">
        {/* Video de fondo */}
        <video
          ref={videoRef}
          className="video-fondo"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoFondo} type="video/mp4" />
        </video>

        <div className="contenedor-pomodoro">
          <h2>Reloj Pomodoro</h2>
          <p id="timer">{formatTime(timeLeft)}</p>

          <div className="botones-pomodoro">
            <button onClick={startTimer}>Iniciar</button>
            <button onClick={pauseTimer}>Pausar</button>
            <button onClick={resetTimer}>Reiniciar</button>
          </div>

          <audio ref={audioRef} loop>
            <source src={sonidoFlurry} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </>
  );
};

export default Pomodoro;