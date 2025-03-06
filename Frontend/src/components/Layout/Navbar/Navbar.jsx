import { Link } from "react-router-dom"
import styles from "./Navbar.module.scss"

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="project">Projets</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar