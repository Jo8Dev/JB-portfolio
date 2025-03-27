import styles from './About.module.scss'
import portrait from '../../../assets/images/image0.jpg'
import { motion } from 'motion/react'
import Button from '../../UI/Button/Button'
import SectionTitle from '../../UI/SectionTitle/SectionTitle'
import SectionText from '../../UI/SectionText/SectionText'
import { aboutMeUrl } from '../../../services/config'
import { useFetch } from '../../../hooks/useFetch'
import Loader from '../../UI/Loader/Loader'

function About() {
    const { data: aboutMe, loading, error } = useFetch(aboutMeUrl)

    if (loading) return <Loader />
    if (error) return <div className={styles.error}>Impossible de charger les projets</div>
    if (!aboutMe) return null

    return (
        <section className={styles.about}>
            <SectionTitle className={styles.about__title}>
                À propos de moi
            </SectionTitle>
            {aboutMe.map((about) => (
                <SectionText className={styles.about__description}
                    key={about.id}>
                    {about.description}
                </SectionText>)
            )}

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