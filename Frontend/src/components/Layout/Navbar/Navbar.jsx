import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom" // Ajout de useLocation
import styles from "./Navbar.module.scss"
import BurgerMenu from "../../UI/BurgerMenu/BurgerMenu"
import Modal from "../../UI/Modal/Modal"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isTablet, setIsTablet] = useState(() => window.innerWidth <= 768)
    const location = useLocation() // Récupère l'emplacement actuel

    // Fonction pour vérifier si un lien est actif
    const isLinkActive = (path) => {
        if (path === "/") {
            // Pour le lien Accueil, uniquement actif sur la page d'accueil exacte
            return location.pathname === "/"
        } else {
            // Pour les autres liens, actifs si le chemin commence par leur route
            return location.pathname.startsWith(`/${path}`)
        }
    }

    useEffect(() => {
        const checkScreenSize = () => {
            setIsTablet(window.innerWidth <= 768)
        }
        window.addEventListener('resize', checkScreenSize)
        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    const handleBurgerClick = (isOpen) => {
        setIsMenuOpen(isOpen)
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
        document.body.style.overflow = 'auto'
    }

    const navLinks = [
        { path: "/", label: "Accueil" },
        { path: "project", label: "Projets" },
        { path: "contact", label: "Contact" }
    ]

    return (
        <nav className={styles.navbar}>
            {/* Version desktop */}
            {!isTablet && (
                <ul className={styles.navbar__list}>
                    {navLinks.map(link => (
                        <li key={link.path} className={styles.navbar__item}>
                            <Link
                                to={link.path}
                                className={`${styles.navbar__link} ${isLinkActive(link.path) ? styles.navbar__link_active : ''}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

            {/* Version tablette/mobile */}
            {isTablet && (
                <div className={styles.navbar__mobileWrapper}>
                    <BurgerMenu isOpen={isMenuOpen} onClick={handleBurgerClick} />

                    <Modal isOpen={isMenuOpen} onClose={closeMenu}>
                        <div className={styles.navbar__mobileMenu}>
                            <ul className={styles.navbar__mobileList}>
                                {navLinks.map(link => (
                                    <li key={link.path} className={styles.navbar__mobileItem}>
                                        <Link
                                            to={link.path}
                                            className={`${styles.navbar__mobileLink} ${isLinkActive(link.path) ? styles.navbar__mobileLink_active : ''}`}
                                            onClick={closeMenu}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Modal>
                </div>
            )}
        </nav>
    )
}

export default Navbar