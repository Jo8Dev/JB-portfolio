import styles from './HeroCard.module.scss'

function HeroCard({ title, subTitle, description }) {
    return (
        <div className={styles.heroCard}>
            <h1 className={styles.heroCard__title}>{title}</h1>
            <h2 className={styles.heroCard__subtitle}>{subTitle}</h2>
            <p className={styles.heroCard__description}>{description}</p>
        </div>
    )
}

export default HeroCard