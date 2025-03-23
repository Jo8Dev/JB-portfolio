import styles from './InProgress.module.scss'
import StackCard from '../../UI/StackCard/StackCard'
import SectionTitle from '../../UI/SectionTitle/SectionTitle'
import SectionText from '../../UI/SectionText/SectionText'
import { stackUrl } from '../../../services/config'
import { useFetch } from '../../../hooks/useFetch'

function InProgress() {

    const title = "En cours d'apprentissage"
    const description = "La vie de développeur est un apprentissage constant. Voici les technologies que je perfectionne actuellement."

    const { data, loading, error } = useFetch(stackUrl)

    if (loading)
        return (
            <section className={styles.inProgress}>
                <SectionTitle className={styles.inProgress__title}>{title}</SectionTitle>
                <div className={styles.inProgress__loading}>Chargement...</div>
            </section>
        )
    if (error) return (
        <section className={styles.inProgress}>
            <SectionTitle className={styles.inProgress__title}>{title}</SectionTitle>
            <div className={styles.inProgress__error}>Impossible de charger les compétences</div>
        </section>
    )

    return (
        <section className={styles.inProgress}>
            <SectionTitle className={styles.inProgress__title}>
                {title}
            </SectionTitle>

            <SectionText className={styles.inProgress__description}>
                {description}
            </SectionText>

            <div className={styles.inProgress__container}>
                {data.inProgress.map((tech, index) => (
                    <StackCard
                        key={tech.id}
                        icon={tech.icon}
                        alt={tech.alt}
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