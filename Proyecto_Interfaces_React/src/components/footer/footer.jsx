import styles from './footer.module.css';
import fbIcon from '../../assets/facebook.png';
import waIcon from '../../assets/whatsapp.png';
import redditIcon from "../../assets/reddit.png";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* Agregamos este wrapper para controlar el ancho máximo y el centrado */}
            <div className={styles.footerContainer}>
                <div className={styles.contacto}>
                    <p>Contacto: <a href="mailto:info@fixtime.com">info@fixtime.com</a></p>
                </div>

                <div className={styles.redes}>
                    <div className={styles.iconos}>
                        <img src={fbIcon} alt="Facebook" />
                        <img src={waIcon} alt="WhatsApp" />
                        <img src={redditIcon} alt="Reddit" /> {/* Corregido alt */}
                    </div>
                    <p>© 2024 FixTime - Todos los derechos reservados</p>
                </div>

                <button className={styles.extraBtn}>Más Información</button>
            </div>
        </footer>
    );
};

export default Footer;