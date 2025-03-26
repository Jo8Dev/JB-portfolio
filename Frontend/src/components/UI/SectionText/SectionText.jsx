import { motion } from 'motion/react'
import PropTypes from 'prop-types'
import styles from './SectionText.module.scss'

function SectionText({ children, className, animationProps }) {
    return (
        <motion.p
            className={`${styles.sectionText} ${className || ''}`}
            initial={{ boxShadow: "none" }}
            whileInView={{ boxShadow: "inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
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