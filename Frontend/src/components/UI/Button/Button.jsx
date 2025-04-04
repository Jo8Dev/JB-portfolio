import styles from './Button.module.scss'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import { motion } from 'motion/react'
import { SHADOWS } from '../../../constants/animation'

function Button({ text, link, onClick, disabled, img, type, external, href }) {
    // Style conditionnel basé sur l'état disabled
    const boxShadowStyle = disabled
        ? { boxShadow: SHADOWS.INSET }
        : { boxShadow: SHADOWS.OUTSET }

    // Création d'un objet d'animation complet avec gestion des états
    const animationProps = {
        initial: { boxShadow: "none" },
        whileHover: disabled ? {} : { boxShadow: SHADOWS.NONE },
        whileTap: disabled ? {} : { boxShadow: SHADOWS.INSET },
        whileInView: boxShadowStyle,
        transition: { duration: 0.2, ease: "easeInOut" }
    }

    // Pour les liens externes
    if (external || href) {
        return (
            <motion.a
                href={href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
                {...animationProps}
            >
                {text}
                {img && <img src={img} alt={text} />}
            </motion.a>
        )
    }

    // Si onClick est fourni, on utilise un bouton avec gestionnaire d'événement
    if (onClick || type) {
        return (
            <motion.button
                type={type}
                className={styles.button}
                onClick={onClick}
                disabled={disabled}
                {...animationProps}
            >
                {text}
                {img && <img src={img} alt={text} />}
            </motion.button>
        )
    }

    // Sinon, on utilise un Link to
    return (
        <Link to={link || "#"} style={disabled ? { pointerEvents: 'none' } : {}}>
            <motion.button
                className={styles.button}
                disabled={disabled}
                {...animationProps}
            >
                {text}
                {img && <img src={img} alt={text} />}
            </motion.button>
        </Link>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    img: PropTypes.string,
    type: PropTypes.string,
    external: PropTypes.bool,
    href: PropTypes.string
}

export default Button