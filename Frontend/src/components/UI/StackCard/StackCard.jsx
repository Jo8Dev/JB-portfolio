import styles from './StackCard.module.scss'
import PropTypes from 'prop-types'
import { motion } from 'motion/react'
import { CARD_ANIMATIONS, TRANSITIONS } from '../../../constants/animation'

function StackCard({ icon, alt, title, animationProps }) {
    return (
        <motion.article
            className={styles.stackCard}
            initial={CARD_ANIMATIONS.initial}
            whileInView={CARD_ANIMATIONS.whileInView}
            viewport={{ once: true, amount: 0.6 }}
            transition={TRANSITIONS.fast}
            {...animationProps}
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