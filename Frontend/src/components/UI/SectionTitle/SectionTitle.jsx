import { motion } from 'motion/react'
import PropTypes from 'prop-types'
import styles from './SectionTitle.module.scss'

function SectionTitle({ children, className, animationProps, hx }) {
    if (hx === 'h1') {
        return (
            <motion.h1
                className={`${styles.sectionTitle} ${className || ''}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                {...animationProps}
            >
                {children}
            </motion.h1>
        );
    }

    return (
        <motion.h2
            className={`${styles.sectionTitle} ${className || ''}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            {...animationProps}
        >
            {children}
        </motion.h2>
    );
}

SectionTitle.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    animationProps: PropTypes.object,
    hx: PropTypes.oneOf(['h1', 'h2'])
}

export default SectionTitle