import styles from './Footer.module.scss'
import logo from '../../../assets/icons/Logo.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className={styles.footer}>

            <Link to="/" className={styles.footer__logoLink}>
                <img className={styles.footer__logo} src={logo} alt="logo JB" />
            </Link>
            <div className={styles.footer__text}>© 2025 JB. Tous droits réservés.</div>
            <a href="#top" className={styles.top}>Retour en haut</a>
        </footer>
    )
}

export default Footer