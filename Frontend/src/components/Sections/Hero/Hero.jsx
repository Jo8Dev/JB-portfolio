import HeroCard from "../../UI/HeroCard/HeroCard"
import styles from "./Hero.module.scss"
import BackgroundHeroCard from "../../UI/BackgroundHeroCard/BackgroundHeroCard"

function Hero() {
    return (
        <div className={styles.hero}>
            <BackgroundHeroCard />
            <HeroCard title={"Hello! Moi c'est Joris"} subTitle={"Développeur Web Front-end Junior"} description={"Ensemble, réalisons des projets innovants. À distance ou sur site, je suis prêt à relever de nouveaux défis."} />
        </div>
    )
}

export default Hero