import styles from './SkillsCard.module.scss'
import PropTypes from 'prop-types'
import { motion } from 'motion/react'

function SkillsCard({ alt, description, icon, subtitle, animationProps }) {
    return (
        <motion.article
            className={styles.skillsCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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