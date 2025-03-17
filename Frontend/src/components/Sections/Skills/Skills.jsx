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
            description: "Création de sites web responsives, optimisés pour le référencement, et parfaitement adaptés aux besoins de votre entreprise.",
        },
        {
            icon: tools,
            alt: "tools logo",
            subtitle: "Maintenance et évolution :",
            description: "Mise à jour, amélioration des performances et gestion des évolutions sur des projets existants pour garantir leur pérennité et leur efficacité.",
        },
        {
            icon: api,
            alt: "api logo",
            subtitle: "Intégration d'API :",
            description: "Conception et intégration d'API pour optimiser les échanges entre systèmes internes ou avec des services tiers, améliorant ainsi l'interopérabilité des outils.",
        }
    ]

    const title = "Ce que j'apporte"

    return (
        <section className={styles.skills}>
            <SectionTitle className={styles.skills__title}            >
                {title}
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