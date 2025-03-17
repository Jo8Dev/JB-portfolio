import HeroCard from "../../UI/HeroCard/HeroCard"
import styles from "./Hero.module.scss"
import BackgroundHeroCard from "../../UI/BackgroundHeroCard/BackgroundHeroCard"

function Hero() {
    return (
        <div className={styles.hero}>
            <BackgroundHeroCard />
            <HeroCard title={"Hello! Moi c'est Joris"} subTitle={"Développeur Web"} description={"Passionné par la création de solutions web, je suis à la recherche de nouveaux défis au sein d'une équipe dynamique. Mon objectif est de contribuer au succès de projets ambitieux en utilisant des technologies modernes adaptées aux besoins spécifiques de l'entreprise. Ensemble, transformons vos idées en applications efficaces et innovantes."} />
        </div>
    )
}

export default Hero