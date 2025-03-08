import Navbar from "../Navbar/Navbar"
import logo from "../../../assets/icons/Logo.png"
import styles from "./Header.module.scss"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.header__logoLink}>
                <img className={styles.header__logo} src={logo} alt="Logo J" />
            </Link>
            <Navbar />
        </header>
    )
}

export default Header