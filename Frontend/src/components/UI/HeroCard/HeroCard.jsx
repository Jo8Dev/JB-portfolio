import styles from './HeroCard.module.scss'
import PropTypes from 'prop-types'

function HeroCard({ title, subTitle, description }) {
    return (
        <div className={styles.heroCard}>
            <h1 className={styles.heroCard__title}>{title}</h1>
            <h2 className={styles.heroCard__subtitle}>{subTitle}</h2>
            <p className={styles.heroCard__description}>{description}</p>
        </div>
    )
}

HeroCard.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default HeroCard