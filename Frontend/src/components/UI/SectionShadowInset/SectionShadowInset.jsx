import { motion } from 'motion/react'

function SectionShadowInset({ children, className }) {
    return (
        <motion.section className={`${className || ''}`}
            initial={{ boxShadow: "none" }}
            whileInView={{ boxShadow: "inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff" }}
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ ease: "easeInOut" }}>
            {children}
        </motion.section>
    )
}

export default SectionShadowInset