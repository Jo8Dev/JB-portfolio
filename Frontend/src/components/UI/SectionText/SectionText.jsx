import { motion } from 'motion/react'
import PropTypes from 'prop-types'
import styles from './SectionText.module.scss'
import { SHADOWS } from '../../../constants/animation'

function SectionText({ children, className, animationProps }) {
    return (
        <motion.p
            className={`${styles.sectionText} ${className || ''}`}
            initial={{ boxShadow: SHADOWS.NONE }}
            whileInView={{ boxShadow: SHADOWS.INSET }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            {...animationProps}
            tabIndex={0}
        >
            {children}
        </motion.p>
    )
}

SectionText.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    animationProps: PropTypes.object
}

export default SectionText