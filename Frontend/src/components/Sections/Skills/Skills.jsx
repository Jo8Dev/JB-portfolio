import { motion } from "motion/react"
import styles from "./Skills.module.scss"
import SkillsCard from '../../UI/SkillsCard/SkillsCard'
import { www, tools, api } from '../../../assets/icons/index'

function Skills2() {
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

    const cardAnimations = [
        {
            initial: { opacity: 0, x: -100 },
            whileInView: {
                opacity: 1,
                x: 0,

                transition: { duration: 1, ease: "easeOut" }
            }
        },
        {
            initial: { opacity: 0, y: 100 },
            whileInView: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.2, ease: "easeOut" }
            }
        },
        {
            initial: { opacity: 0, x: 100 },
            whileInView: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 0.4, ease: "easeOut" }
            }
        }
    ]

    return (
        <section className={styles.section}>
            <motion.h2
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                Ce que je propose
            </motion.h2>
            <div className={styles.skills}>
                {cardProps.map((prop, index) => (
                    <motion.div
                        key={index}
                        initial={cardAnimations[index].initial}
                        whileInView={cardAnimations[index].whileInView}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <SkillsCard
                            icon={prop.icon}
                            alt={prop.alt}
                            subtitle={prop.subtitle}
                            description={prop.description}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Skills2