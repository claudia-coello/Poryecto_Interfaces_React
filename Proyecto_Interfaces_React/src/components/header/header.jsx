import { useState } from 'react';
import styles from './header.module.css';
import relojImg from '../../assets/reloj.png';

const Header = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <nav className={styles.menu}>
            <div className={styles.logoElementos}>
                <a className={styles.logo} href="/">
                    <img src={relojImg} alt="Icono reloj" className={styles.relojImg} />
                    Fix<span>Time</span>
                </a>
            </div>

            <button 
                className={styles.abrir} 
                onClick={() => setMenuAbierto(!menuAbierto)}
            >
                ☰
            </button>

            <div className={`${styles.navLinks} ${menuAbierto ? styles.activo : ''}`}>
                <a href="/servicios">Contrátanos</a>
                <a href="/login">Iniciar Sesión</a>
            </div>
        </nav>
    );
};

export default Header;