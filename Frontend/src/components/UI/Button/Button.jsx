import styles from './Button.module.scss'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

function Button({ text, link }) {
    return (
        <Link to={link}><button className={styles.button} >{text}</button></Link>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default Button