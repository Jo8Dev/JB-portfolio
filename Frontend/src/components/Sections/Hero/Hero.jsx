import HeroCard from "../../UI/HeroCard/HeroCard"
import styles from "./Hero.module.scss"
import BackgroundHeroCard from "../../UI/BackgroundHeroCard/BackgroundHeroCard"

function Hero() {

    const cardTitle = "Hello! Moi c'est Joris"
    const cardSubTitle = "Développeur Web"
    const cardDescription = "Passionné par la création de solutions web, je suis à la recherche de nouveaux défis au sein d'une équipe dynamique. Mon objectif est de contribuer au succès de projets ambitieux en utilisant des technologies modernes adaptées aux besoins spécifiques de l'entreprise. Ensemble, transformons vos idées en applications efficaces et innovantes."

    return (
        <div className={styles.hero}>
            <BackgroundHeroCard title={cardTitle} subTitle={cardSubTitle} description={cardDescription} />
            <HeroCard title={cardTitle} subTitle={cardSubTitle} description={cardDescription} />
        </div>
    )
}

export default Hero