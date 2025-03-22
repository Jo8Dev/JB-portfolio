import styles from './About.module.scss'
import portrait from '../../../assets/images/image0.jpg'
import { motion } from 'motion/react'
import Button from '../../UI/Button/Button'
import SectionTitle from '../../UI/SectionTitle/SectionTitle'
import SectionText from '../../UI/SectionText/SectionText'

function About() {
    const aboutMe = "Je suis basketteur professionnel depuis plus de 10 ans et, tout en poursuivant ma carrière sur les terrains, je me reconvertis vers le développement web, un domaine pour lequel j'ai toujours eu une passion profonde. Depuis longtemps, je m'intéresse non seulement au développement logiciel, mais aussi au hardware et à l'univers de l'informatique. J'aime particulièrement monter des PC, ce qui me permet d'explorer la technologie sous un autre angle. Tout en continuant à jouer à haut niveau, j'ai entrepris une formation en développement web, où j'ai acquis des compétences en technologies telles que JavaScript, React, Node.js et MongoDB. Mon approche du développement est marquée par la rigueur et la discipline que j'ai développées dans le sport : chaque ligne de code compte, et je suis déterminé à continuer d’apprendre et de progresser. Aujourd'hui, je souhaite allier ma passion pour la technologie, mon esprit de compétition et mon intérêt pour le hardware afin de créer des projets innovants et impactants, tout en restant fidèle à mes valeurs de travail en équipe, d'effort et d'amélioration continue."
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
                    viewport: { once: true, amount: 1 },
                    transition: { duration: 0.8 }
                }}
            >
                {aboutMe}
            </SectionText>

            <div className={styles.about__container}>
                <div className={styles.about__imageWrapper}>
                    <motion.div
                        className={styles.about__container_div}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    ></motion.div>

                    <div className={styles.about__imageContainer}>
                        <motion.img
                            className={styles.about__container_img}
                            src={portrait}
                            alt={"Portrait de JB"}
                            initial={{ opacity: 0, rotate: 180 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        />
                    </div>
                </div>
            </div>
            <Button text={"Contactez moi"} link={"contact"} />
        </section>
    )
}

export default About