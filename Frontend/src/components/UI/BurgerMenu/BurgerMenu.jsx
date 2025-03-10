import styles from './BurgerMenu.module.scss'
import PropTypes from 'prop-types'

// Transformer BurgerMenu en composant contrôlé
function BurgerMenu({ isOpen, onClick }) {
    const handleClick = () => {
        if (onClick) onClick(!isOpen)
    }

    return (
        <button
            className={`${styles.burgerMenu} ${isOpen ? styles.open : ''}`}
            onClick={handleClick}
            aria-label="Menu de navigation"
        >
            <div className={styles.bar} />
            <div className={styles.bar} />
            <div className={styles.bar} />
        </button>
    )
}

BurgerMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func
}

export default BurgerMenu