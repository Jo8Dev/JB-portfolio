import styles from './StackCard.module.scss'
import PropTypes from 'prop-types'

function StackCard({ icon, alt, title }) {
    return (
        <article className={styles.stackCard}>
            <img className={styles.stackCard__icon} src={icon} alt={alt} />
            <span className={styles.stackCard__title}>{title}</span>
        </article>
    )
}

StackCard.propTypes = {
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default StackCard