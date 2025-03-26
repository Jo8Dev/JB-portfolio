import styles from './SkillsCard.module.scss'
import PropTypes from 'prop-types'
import { motion } from 'motion/react'

function SkillsCard({ alt, description, icon, subtitle, animationProps }) {
    return (
        <motion.article
            className={styles.skillsCard}
            initial={{ opacity: 0, boxShadow: "none" }}
            whileInView={{ opacity:1 ,boxShadow: "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 4, ease: "easeOut" }}
            {...animationProps}
        >
            <img className={styles.skillsCard__icon} src={icon} alt={alt} />
            <strong className={styles.skillsCard__subtitle}>{subtitle}</strong>
            <p className={styles.skillsCard__description}>{description}</p>
        </motion.article>
    )
}

SkillsCard.propTypes = {
    alt: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    animationProps: PropTypes.object
}

export default SkillsCard