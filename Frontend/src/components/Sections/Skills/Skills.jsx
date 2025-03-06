import SkillsCard from '../../UI/SkillsCard/SkillsCard'
import styles from './Skills.module.scss'
import www from '../../../assets/icons/icons8-website-arcade-96.png'
import maintenance from '../../../assets/icons/icons8-tools-96.png'
import api from '../../../assets/icons/icons8-api-arcade-96.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Skills() {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <section className={styles.skills}>
            <h2 data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">Ce que je propose</h2>
            <div className={styles.skills__cards}>
                <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"><SkillsCard icon={www} alt={"world wide web logo"} subtitle={"Développement de sites web :"} description={"Création de sites responsive, optimisés pour le référencement et adaptés aux besoins spécifiques du client."} /></div>
                <div data-aos="fade-up" data-aos-offset="400" data-aos-delay="200"><SkillsCard icon={maintenance} alt={"tools logo"} subtitle={"Maintenance et évolution :"} description={"Mise à jour, amélioration des performances et correction des erreurs sur des projets existants."} /></div>
                <div data-aos="fade-left" data-aos-offset="500" data-aos-easing="ease-in-sine"><SkillsCard icon={api} alt={"api logo"} subtitle={"Intégration d'API :"} description={"Création et intégration d'API pour des services tiers ou des solutions internes."} /></div>
            </div>
        </section>
    )
}

export default Skills