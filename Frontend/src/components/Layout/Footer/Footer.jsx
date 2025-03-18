import { useState, useEffect } from 'react'
import styles from './Footer.module.scss'
import logo from '../../../assets/icons/Logo.png'
import { Link } from 'react-router-dom'
import { github, arrowUp } from '../../../assets/icons/index'

function Footer() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    // Vérifie la position du scroll
    useEffect(() => {
        const handleScroll = () => {
            // Affiche le bouton après avoir défilé de 300px
            setShowScrollButton(window.scrollY > 300);
        }

        // Vérifie à l'initialisation
        handleScroll()

        // Ajoute l'écouteur d'événement
        window.addEventListener('scroll', handleScroll)

        // Nettoyage à la destruction du composant
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer className={styles.footer}>
            <Link to="/" className={styles.footer__logoLink}>
                <img className={styles.footer__logo} src={logo} alt="logo JB" />
            </Link>
            <div className={styles.footer__text}>© 2025 JB. Tous droits réservés.</div>
            <div className={styles.footer__socials}>
                <a href="https://github.com/jo8dev" target="_blank" rel="noreferrer" className={styles.footer__social}>
                    <img src={github} alt="Lien vers mon github" />
                </a>
                {showScrollButton && (
                    <a href="#top" className={styles.top} onClick={scrollToTop}>
                        <img
                            src={arrowUp}
                            alt="Retour en haut"
                            className={styles.footer__arrowUp}
                        />
                    </a>
                )}
            </div>
        </footer>
    )
}

export default Footer