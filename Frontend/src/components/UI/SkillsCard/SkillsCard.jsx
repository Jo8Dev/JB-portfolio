import styles from './SkillsCard.module.scss'
import PropTypes from 'prop-types'

function SkillsCard({ alt, description, icon, subtitle }) {
    return (
        <article className={styles.article}>
            <img src={icon} alt={alt} />
            <strong>{subtitle}</strong>
            <p>{description}</p>
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