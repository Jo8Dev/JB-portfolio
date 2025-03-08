import styles from './InProgress.module.scss'
import { tailwindcss, postgresql, typescript, react } from "../../../assets/icons/index"
import { motion } from "motion/react"
import StackCard from '../../UI/StackCard/StackCard'

function InProgress() {
    const technologies = [
        { icon: react, name: 'React Native' },
        { icon: typescript, name: 'TypeScript' },
        { icon: postgresql, name: 'PostgreSQL' },
        { icon: tailwindcss, name: 'TailwindCss' }
    ]

    return (
        <section className={styles.inProgress}>
            <motion.h2
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut"
                }}
            >
                En cours d&apos;apprentissage
            </motion.h2>
            <div className={styles.inProgress__container}>
                {technologies.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.1,
                            ease: "easeOut"
                        }}
                    >
                        <StackCard
                            icon={tech.icon}
                            alt={`logo ${tech.name}`}
                            title={tech.name}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default InProgress