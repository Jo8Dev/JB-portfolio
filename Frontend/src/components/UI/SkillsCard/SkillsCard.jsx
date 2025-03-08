import styles from './SkillsCard.module.scss'
import PropTypes from 'prop-types'

function SkillsCard({ alt, description, icon, subtitle }) {
    return (
        <article className={styles.skillsCard}>
            <img className={styles.skillsCard__icon} src={icon} alt={alt} />
            <strong className={styles.skillsCard__subtitle}>{subtitle}</strong>
            <p className={styles.skillsCard__description}>{description}</p>
        </article>
    )
}

SkillsCard.propTypes = {
    alt: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default SkillsCard