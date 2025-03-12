import HeroCard from "../../UI/HeroCard/HeroCard"
import styles from "./Hero.module.scss"
import BackgroundHeroCard from "../../UI/BackgroundHeroCard/BackgroundHeroCard"

function Hero() {
    return (
        <div className={styles.hero}>
            <BackgroundHeroCard />
            <HeroCard title={"Hello! Moi c'est Joris"} subTitle={"Développeur Web"} description={"Ensemble, transformons vos idées en réalité avec des technologies modernes et adaptées à vos besoins. Que ce soit en freelance ou au sein d'une équipe, je suis prêt à relever de nouveaux défis."} />
        </div>
    )
}

export default Hero