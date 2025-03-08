import styles from './Footer.module.scss'
import logo from '../../../assets/icons/Logo.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__text}>Footer</div>
            <Link to="/" className={styles.footer__logoLink}>
                <img className={styles.footer__logo} src={logo} alt="logo JB" />
            </Link>
        </footer>
    )
}

export default Footer