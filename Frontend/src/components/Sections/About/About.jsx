import styles from './About.module.scss'
import portrait from '../../../assets/images/image0.jpg'
import { motion } from 'motion/react'
import Button from '../../UI/Button/Button'
import SectionTitle from '../../UI/SectionTitle/SectionTitle'
import SectionText from '../../UI/SectionText/SectionText'

function About() {
    return (
        <section className={styles.about}>
            <SectionTitle className={styles.about__title}>
                À propos de moi
            </SectionTitle>

            <SectionText
                className={styles.about__description}
                animationProps={{
                    initial: { opacity: 0, scale: 0 },
                    whileInView: { opacity: 1, scale: 1 },
                    transition: { duration: 1.2, delay: 0.3 }
                }}
            >
                Je suis un développeur web fullstack passionné par la programmation et les nouvelles technologies. J&apos;ai commencé à apprendre le développement web en autodidacte en 2019. J&apos;ai acquis des compétences en HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Git, GitHub, et bien d&apos;autres technologies. J&apos;ai également une expérience en développement mobile avec React Native. Je suis actuellement en formation chez OpenClassrooms pour obtenir un diplôme de développeur d&apos;application web.
            </SectionText>

            <div className={styles.about__container}>
                <div className={styles.about__imageWrapper}>
                    <motion.div
                        className={styles.about__container_div}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    ></motion.div>

                    <div className={styles.about__imageContainer}>
                        <motion.img
                            className={styles.about__container_img}
                            src={portrait}
                            alt={"Portrait de JB"}
                            initial={{ opacity: 0, rotate: 180 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        />
                    </div>
                </div>
            </div>
            <Button text={"Contactez moi"} link={"contact"} />
        </section>
    )
}

export default About