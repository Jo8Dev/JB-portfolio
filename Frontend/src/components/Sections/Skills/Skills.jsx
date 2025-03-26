import styles from "./Skills.module.scss"
import SkillsCard from '../../UI/SkillsCard/SkillsCard'
import SectionTitle from "../../UI/SectionTitle/SectionTitle"
import { useFetch } from "../../../hooks/useFetch"
import { skillsUrl } from "../../../services/config"
import Loader from "../../UI/Loader/Loader"


function Skills() {
    const title = "Ce que j'apporte"
    const { data, loading, error } = useFetch(skillsUrl)

    if (loading)
        return (
            <section className={styles.skills}>
                <SectionTitle className={styles.skills__title}>{title}</SectionTitle>
                <Loader/>
            </section>
        )
    if (error) return (
        <section className={styles.skills}>
            <SectionTitle className={styles.skills__title}>{title}</SectionTitle>
            <div className={styles.skills__error}>Impossible de charger les compétences</div>
        </section>
    )


    return (
        <section className={styles.skills}>
            <SectionTitle className={styles.skills__title}            >
                {title}
            </SectionTitle>
            <div className={styles.skills__container}>
                {data.map((prop, index) => (
                    <SkillsCard
                        key={index}
                        icon={prop.icon}
                        alt={prop.alt}
                        subtitle={prop.subtitle}
                        description={prop.description}
                        animationProps={{
                            transition: { delay: index * 0.2 }
                        }}
                    />
                ))}
            </div>
        </section>
    )
}

export default Skills