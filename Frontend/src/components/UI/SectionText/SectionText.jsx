import { motion } from 'motion/react'
import PropTypes from 'prop-types'
import styles from './SectionText.module.scss'

function SectionText({ children, className, animationProps }) {
    return (
        <motion.p
            className={`${styles.sectionText} ${className || ''}`}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            {...animationProps}
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