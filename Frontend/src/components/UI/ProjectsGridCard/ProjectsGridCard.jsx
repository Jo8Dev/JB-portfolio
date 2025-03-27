import { Link } from "react-router-dom"
import styles from './ProjectsGridCard.module.scss'
import PropTypes from 'prop-types'
import { motion } from 'motion/react';
import { SHADOWS } from '../../../constants/animation';

function ProjectsGridCard({ id, images, title, technologies, index = 0 }) {
    return (
        <motion.div
            className={styles.projectsGridCard}
            initial={{ opacity: 0, rotateY: -180, boxShadow: "none" }}
            whileInView={{ opacity: 1, rotateY: 0, boxShadow: SHADOWS.OUTSET }}
            whileHover={{
                y: -10,
                boxShadow: SHADOWS.HOVER,
                transition: { duration: 0.2 }
            }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
                delay: index * 0.3 // Ajoute un délai progressif basé sur l'index
            }}
        >
            <Link to={`/project/${id}`} className={styles.projectsGridCard__link}>
                <div className={styles.projectsGridCard__imageContainer}>
                    <img
                        src={images[0]}
                        alt={title}
                        className={styles.projectsGridCard__image}
                    />
                </div>
                <div className={styles.projectsGridCard__content}>
                    <h3 className={styles.projectsGridCard__title}>{title}</h3>
                    <div className={styles.projectsGridCard__technologies}>
                        {technologies.slice(0, 3).map(tech => (
                            <span key={tech} className={styles.projectsGridCard__tech}>
                                {tech}
                            </span>
                        ))}
                        {technologies.length > 3 && (
                            <span className={styles.projectsGridCard__moretech}>
                                +{technologies.length - 3}
                            </span>
                        )}
                    </div>
                </div>
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