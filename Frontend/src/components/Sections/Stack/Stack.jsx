import StackCard from '../../UI/StackCard/StackCard'
import styles from './Stack.module.scss'
import { motion } from 'motion/react'
import { html, css, javascript, react, node, sass, mongodb, figma } from '../../../assets/icons/index'

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
            <motion.h2
                className={styles.stack__title}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut"
                }}
            >
                Technologies utilisées
            </motion.h2>
            <div className={styles.stack__container}>
                {technologies.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, rotateY: -90 }}
                        whileInView={{ opacity: 1, rotateY: 0 }}
                        viewport={{ amount: 0.6 }}
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

export default Stack