import { motion } from 'motion/react'
import PropTypes from 'prop-types'
import styles from './SectionTitle.module.scss'

function SectionTitle({ children, className, animationProps }) {
    return (
        <motion.h2
            className={`${styles.sectionTitle} ${className || ''}`}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            {...animationProps}
        >
            {children}
        </motion.h2>
    )
}

SectionTitle.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    animationProps: PropTypes.object
}

export default SectionTitle