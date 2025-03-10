import StackCard from '../../UI/StackCard/StackCard'
import Button from '../../UI/Button/Button'
import styles from './Stack.module.scss'
import { html, css, javascript, react, node, sass, mongodb, figma } from '../../../assets/icons/index'
import SectionTitle from '../../UI/SectionTitle/SectionTitle'
import SectionText from '../../UI/SectionText/SectionText'

function Stack() {
    const technologies = [
        { icon: html, name: 'Html' },
        { icon: css, name: 'Css' },
        { icon: sass, name: 'Sass' },
        { icon: javascript, name: 'Javascript' },
        { icon: react, name: 'React' },
        { icon: node, name: 'NodeJs' },
        { icon: mongodb, name: 'MongoDB' },
        { icon: figma, name: 'Figma' }
    ]

    return (
        <section className={styles.stack}>
            <SectionTitle className={styles.stack__title}>
                Technologies utilisées
            </SectionTitle>

            <SectionText className={styles.stack__description}>
                Voici les technologies que j&apos;utilise pour créer des applications web pour le moment.
            </SectionText>

            <div className={styles.stack__container}>
                {technologies.map((tech, index) => (
                    <StackCard
                        key={tech.name}
                        icon={tech.icon}
                        alt={`logo ${tech.name}`}
                        title={tech.name}
                        animationProps={{
                            transition: { delay: index * 0.1 }
                        }}
                    />
                ))}
            </div>
            <Button text={"Consultez mes projets"} link={"project"} />
        </section>
    )
}

export default Stack