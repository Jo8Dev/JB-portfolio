import styles from "./Skills.module.scss"
import SkillsCard from '../../UI/SkillsCard/SkillsCard'
import { www, tools, api } from '../../../assets/icons/index'
import SectionTitle from "../../UI/SectionTitle/SectionTitle"

function Skills() {
    const cardProps = [
        {
            icon: www,
            alt: "world wide web logo",
            subtitle: "Développement de sites web :",
            description: "Création de sites responsive, optimisés pour le référencement et adaptés aux besoins spécifiques du client.",
        },
        {
            icon: tools,
            alt: "tools logo",
            subtitle: "Maintenance et évolution :",
            description: "Mise à jour, amélioration des performances et correction des erreurs sur des projets existants.",
        },
        {
            icon: api,
            alt: "api logo",
            subtitle: "Intégration d'API :",
            description: "Création et intégration d'API pour des services tiers ou des solutions internes.",
        }
    ]

    return (
        <section className={styles.skills}>
            <SectionTitle className={styles.skills__title}            >
                Ce que je propose
            </SectionTitle>
            <div className={styles.skills__container}>
                {cardProps.map((prop, index) => (
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