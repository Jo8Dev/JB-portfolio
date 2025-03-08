import { Link } from "react-router-dom"
import styles from "./Navbar.module.scss"

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar__list}>
                <li className={styles.navbar__item}>
                    <Link to="/" className={styles.navbar__link}>Accueil</Link>
                </li>
                <li className={styles.navbar__item}>
                    <Link to="project" className={styles.navbar__link}>Projets</Link>
                </li>
                <li className={styles.navbar__item}>
                    <Link to="contact" className={styles.navbar__link}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar