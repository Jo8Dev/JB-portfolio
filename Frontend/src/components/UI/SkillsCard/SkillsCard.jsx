import styles from './SkillsCard.module.scss'
import PropTypes from 'prop-types'
import { motion } from 'motion/react'
import { SHADOWS } from '../../../constants/animation'

function SkillsCard({ alt, description, icon, subtitle, animationProps }) {
    return (
        <motion.article
            className={styles.skillsCard}
            initial={{ opacity: 0, boxShadow: SHADOWS.NONE }}
            whileInView={{ opacity: 1, boxShadow: SHADOWS.OUTSET }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2, ease: "cubic-bezier(1,-0.01,.25,1.95)" }}
            {...animationProps}
            tabIndex={0}
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