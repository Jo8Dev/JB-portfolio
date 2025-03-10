import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.scss"
import BurgerMenu from "../../UI/BurgerMenu/BurgerMenu"
import Modal from "../../UI/Modal/Modal"

function Navbar() {
    // Initialiser isTablet avec une vérification immédiate pour éviter le flash de mes liens
    const [isMenuOpen, setIsMenuOpen] = useState(false) // Gérer l'état du menu
    const [isTablet, setIsTablet] = useState(() => window.innerWidth <= 768) // Vérifier la largeur de l'écran

    useEffect(() => {
        const checkScreenSize = () => {
            setIsTablet(window.innerWidth <= 768) // Mettre à jour l'état de la tablette
        }

        // Configurer l'écouteur d'événement pour les changements de taille
        window.addEventListener('resize', checkScreenSize)

        return () => window.removeEventListener('resize', checkScreenSize) // Nettoyer l'écouteur d'événement
    }, [])

    // Gérer l'ouverture du menu
    const handleBurgerClick = (isOpen) => {
        setIsMenuOpen(isOpen)
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    }

    // Fermer le menu
    const closeMenu = () => {
        setIsMenuOpen(false)
        document.body.style.overflow = 'auto'
    }

    // Liste centralisée des liens de navigation
    const navLinks = [
        { path: "/", label: "Accueil" },
        { path: "project", label: "Projets" },
        { path: "contact", label: "Contact" }
    ];

    return (
        <nav className={styles.navbar}>
            {/* Version desktop */}
            {!isTablet && (
                <ul className={styles.navbar__list}>
                    {navLinks.map(link => (
                        <li key={link.path} className={styles.navbar__item}>
                            <Link to={link.path} className={styles.navbar__link}>
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
                                            className={styles.navbar__mobileLink}
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