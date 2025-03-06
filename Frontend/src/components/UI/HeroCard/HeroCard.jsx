import styles from './HeroCard.module.scss'

function HeroCard({ title, subTitle, description }) {

    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <p>{description}</p>
        </div>
    )
}

export default HeroCard