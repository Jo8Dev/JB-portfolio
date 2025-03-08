import styles from './StackCard.module.scss'
import PropTypes from 'prop-types'

function StackCard({ icon, alt, title }) {
    return (
        <article className={styles.StackCard}>
            <img src={icon} alt={alt} />
            <span>{title}</span>
        </article>
    )
}

StackCard.propTypes = {
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default StackCard