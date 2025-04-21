import { Link } from "react-router-dom"
import styles from './ProjectsGridCard.module.scss'
import PropTypes from 'prop-types'
import { motion } from 'motion/react'
import { SHADOWS } from '../../../constants/animation'

function ProjectsGridCard({ id, images, title, technologies, index = 0 }) {
    // Configuration avancée de l'animation
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.8,
            rotateX: 15,
            rotateY: -20,
            boxShadow: "none"
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            boxShadow: SHADOWS.OUTSET,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 15,
                mass: 1,
                delay: index * 0.15,
                duration: 0.5
            }
        },
        hover: {
            y: -15,
            scale: 1.05,
            rotateX: 5,
            rotateY: 5,
            boxShadow: SHADOWS.HOVER,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10
            }
        }
    }

    // Configuration pour les animations des éléments internes
    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.15 + 0.3,
                duration: 0.4
            }
        }
    }

    return (
        <motion.div
            className={styles.projectsGridCard}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            style={{ perspective: 1000 }} // Ajoute de la perspective pour un effet 3D plus prononcé
        >
            <Link to={`/project/${id}`} className={styles.projectsGridCard__link}>
                <motion.div className={styles.projectsGridCard__imageContainer}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            delay: index * 0.15 + 0.2,
                            type: "spring",
                            stiffness: 300
                        }
                    }}
                    viewport={{ once: true }}
                >
                    <img
                        src={images[0]}
                        alt={title}
                        className={styles.projectsGridCard__image}
                    />
                </motion.div>
                <motion.div
                    className={styles.projectsGridCard__content}
                    variants={contentVariants}
                >
                    <h3 className={styles.projectsGridCard__title}>{title}</h3>
                    <div className={styles.projectsGridCard__technologies}>
                        {technologies.slice(0, 3).map((tech, techIndex) => (
                            <motion.span
                                key={tech}
                                className={styles.projectsGridCard__tech}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        delay: index * 0.15 + 0.4 + (techIndex * 0.1)
                                    }
                                }}
                                viewport={{ once: true }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                        {technologies.length > 3 && (
                            <motion.span
                                className={styles.projectsGridCard__moretech}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        delay: index * 0.15 + 0.7
                                    }
                                }}
                                viewport={{ once: true }}
                            >
                                +{technologies.length - 3}
                            </motion.span>
                        )}
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    )
}

ProjectsGridCard.propTypes = {
    id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    index: PropTypes.number // Nouvelle prop pour l'effet en cascade
}

export default ProjectsGridCard