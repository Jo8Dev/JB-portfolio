import styles from './InProgress.module.scss'
import { tailwindcss, postgresql, typescript, react } from "../../../assets/icons/index"
import StackCard from '../../UI/StackCard/StackCard'
import SectionTitle from '../../UI/SectionTitle/SectionTitle'
import SectionText from '../../UI/SectionText/SectionText'

function InProgress() {
    const technologies = [
        { icon: react, name: 'React Native' },
        { icon: typescript, name: 'TypeScript' },
        { icon: postgresql, name: 'PostgreSQL' },
        { icon: tailwindcss, name: 'TailwindCss' }
    ]

    const title = "En cours d'apprentissage"
    const description = "La vie de développeur est un apprentissage constant. Voici les technologies que je perfectionne actuellement."

    return (
        <section className={styles.inProgress}>
            <SectionTitle className={styles.inProgress__title}>
                {title}
            </SectionTitle>

            <SectionText className={styles.inProgress__description}>
                {description}
            </SectionText>

            <div className={styles.inProgress__container}>
                {technologies.map((tech, index) => (
                    <StackCard
                        key={tech.name}
                        icon={tech.icon}
                        alt={`logo ${tech.name}`}
                        title={tech.name}
                        animationProps={{
                            transition: { delay: index * 0.1, ease: "easeOut" }
                        }}
                    />
                ))}
            </div>
        </section>
    )
}

export default InProgress