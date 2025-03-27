import { motion } from 'motion/react'
import propTypes from 'prop-types'
import { SHADOWS } from '../../../constants/animation'

function SectionShadowInset({ children, className }) {
    return (
        <motion.section className={`${className || ''}`}
            initial={{ boxShadow: SHADOWS.NONE }}
            whileInView={{ boxShadow: SHADOWS.INSET }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ease: "easeInOut" }}>
            {children}
        </motion.section>
    )
}

SectionShadowInset.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string
}

export default SectionShadowInset