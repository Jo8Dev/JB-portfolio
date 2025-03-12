import styles from './Button.module.scss'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

function Button({ text, link, onClick, disabled }) {
    // Si onClick est fourni, utiliser un bouton avec gestionnaire d'événement
    if (onClick) {
        return (
            <button
                className={styles.button}
                onClick={onClick}
                disabled={disabled}
            >
                {text}
            </button>
        );
    }

    // Sinon, utiliser un Link (comportement existant)
    return (
        <Link to={link || "#"}>
            <button className={styles.button} disabled={disabled}>
                {text}
            </button>
        </Link>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};

Button.defaultProps = {
    link: null,
    onClick: null,
    disabled: false
};

export default Button;