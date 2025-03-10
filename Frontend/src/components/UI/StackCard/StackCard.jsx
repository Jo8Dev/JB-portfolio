import styles from './StackCard.module.scss'
import PropTypes from 'prop-types'
import { motion } from 'motion/react'

function StackCard({ icon, alt, title, animationProps }) {
    return (
        <motion.article
            className={styles.stackCard}
            initial={{ opacity: 0, rotateY: -180 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            {...animationProps} // Pour surcharger les valeurs par défaut
        >
            <img className={styles.stackCard__icon} src={icon} alt={alt} />
            <span className={styles.stackCard__title}>{title}</span>
        </motion.article>
    )
}

StackCard.propTypes = {
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    animationProps: PropTypes.object
}

export default StackCard