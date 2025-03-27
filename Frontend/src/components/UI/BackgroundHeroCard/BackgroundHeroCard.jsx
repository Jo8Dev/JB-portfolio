import styles from './BackgroundHeroCard.module.scss'
import PropTypes from 'prop-types'


function BackgroundHeroCard({ title, subTitle, description }) {
    return (
        <div className={styles.backgroundHeroCard}>
            <h1 className={styles.backgroundHeroCard__title}>{title}</h1>
            <h2 className={styles.backgroundHeroCard__subtitle}>{subTitle}</h2>
            <p className={styles.backgroundHeroCard__description}>{description}</p>
        </div>
    )
}

BackgroundHeroCard.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default BackgroundHeroCard