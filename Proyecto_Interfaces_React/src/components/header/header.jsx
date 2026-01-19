import { useState } from 'react';
import { Link } from "react-router-dom"; // Importa Link
import styles from './header.module.css';
import relojImg from '../../assets/reloj.png';

const Header = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <nav className={styles.menu}>
            <div className={styles.logoElementos}>
                <Link className={styles.logo} to="/">
                    <img src={relojImg} alt="Icono reloj" className={styles.relojImg} />
                    Fix<span>Time</span>
                </Link>
            </div>

            <button 
                className={styles.abrir} 
                onClick={() => setMenuAbierto(!menuAbierto)}
            >
                ☰
            </button>

            <div className={`${styles.navLinks} ${menuAbierto ? styles.activo : ''}`}>
                <Link to="/planes-servicio">Contrátanos</Link>
                <Link to="/pomodoro">Iniciar Sesión</Link>
            </div>
        </nav>
    );
};

export default Header;
