import StackCard from '../../UI/StackCard/StackCard'
import styles from './Stack.module.scss'
import SectionTitle from '../../UI/SectionTitle/SectionTitle'
import SectionText from '../../UI/SectionText/SectionText'
import { stackUrl } from '../../../services/config'
import { useFetch } from '../../../hooks/useFetch'
import Loader from '../../UI/Loader/Loader'
import SectionShadowInset from '../../UI/SectionShadowInset/SectionShadowInset'

function Stack() {

    const title = "Technologies utilisées"
    const description = "Voici les technologies que j'emploie pour développer des applications web performantes et adaptées aux besoins de mes projets."
    const { data, loading, error } = useFetch(stackUrl)

    if (loading)
        return (
            <section className={styles.skills}>
                <SectionTitle className={styles.skills__title}>{title}</SectionTitle>
                <div className={styles.skills__loading}><Loader /></div>
            </section>
        )
    if (error) return (
        <section className={styles.skills}>
            <SectionTitle className={styles.skills__title}>{title}</SectionTitle>
            <div className={styles.skills__error}>Impossible de charger les compétences</div>
        </section>
    )

    return (
        <SectionShadowInset className={styles.stack}>
            <SectionTitle className={styles.stack__title}>
                {title}
            </SectionTitle>

            <SectionText className={styles.stack__description}>
                {description}
            </SectionText>

            <div className={styles.stack__container}>
                {data.stack.map((tech, index) => (
                    <StackCard
                        key={tech.id}
                        icon={tech.icon}
                        alt={tech.alt}
                        title={tech.name}
                        animationProps={{
                            transition: { delay: index * 0.1 }
                        }}
                    />
                ))}
            </div>
        </SectionShadowInset>
    )
}

export default Stack