import styles from './Button.module.scss'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

function Button({ text, link, onClick, disabled, img }) {
    // Style conditionnel basé sur l'état disabled
    const boxShadowStyle = disabled 
        ? { boxShadow: "inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff" }
        : { boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff" };
    
    // Si onClick est fourni, utiliser un bouton avec gestionnaire d'événement
    if (onClick) {
        return (
            <motion.button
                initial={{ boxShadow: "none" }}
                whileHover={disabled ? {} : { boxShadow: "none" }}
                whileTap={disabled ? {} : { boxShadow: "inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff" }}
                whileInView={boxShadowStyle}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={styles.button}
                onClick={onClick}
                disabled={disabled}
            >
                {text}
                {img && <img src={img} alt={text} />}
            </motion.button>
        )
    }

    // Sinon, utiliser un Link (comportement existant)
    return (
        <Link to={link || "#"} style={disabled ? { pointerEvents: 'none' } : {}}>
            <motion.button 
                className={styles.button} 
                disabled={disabled}
                initial={{ boxShadow: "none" }}
                whileHover={disabled ? {} : { boxShadow: "none" }}
                whileTap={disabled ? {} : { boxShadow: "inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff" }}
                whileInView={boxShadowStyle}
                transition={{ duration: 0.2, ease: "easeInOut" }}
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
    img: PropTypes.string
}

export default Button