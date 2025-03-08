// import SkillsCard from '../../UI/SkillsCard/SkillsCard'
// import styles from './Skills.module.scss'
// import www from '../../../assets/icons/icons8-website-arcade-96.png'
// import maintenance from '../../../assets/icons/icons8-tools-96.png'
// import api from '../../../assets/icons/icons8-api-arcade-96.png'
// import services from '../../../assets/icons/icons8-service-96.png'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

// function Skills() {
//     const skillsData = [
//         {
//             icon: www,
//             alt: "world wide web logo",
//             subtitle: "Développement de sites web :",
//             description: "Création de sites responsive, optimisés pour le référencement et adaptés aux besoins spécifiques du client.",
//             animation: "fade-right",
//             offset: "300"
//         },
//         {
//             icon: maintenance,
//             alt: "tools logo",
//             subtitle: "Maintenance et évolution :",
//             description: "Mise à jour, amélioration des performances et correction des erreurs sur des projets existants.",
//             animation: "fade-up",
//             offset: "400"
//         },
//         {
//             icon: api,
//             alt: "api logo",
//             subtitle: "Intégration d'API :",
//             description: "Création et intégration d'API pour des services tiers ou des solutions internes.",
//             animation: "fade-left",
//             offset: "500"
//         }
//     ];

//     useEffect(() => {
//         AOS.init()
//     }, [])

//     return (
//         <section className={styles.skills}>
//             <div data-aos="zoom-in" data-aos-offset="100" data-aos-easing="ease-in-out" className={styles.skills__title}>
//                 <img src={services} alt="Logo services" />
//                 <h2>Ce que je propose</h2>
//             </div>
//             <div className={styles.skills__cards}>
//                 {skillsData.map((skill, index) => (
//                     <div
//                         key={skill.subtitle}
//                         data-aos={skill.animation}
//                         data-aos-offset={skill.offset}
//                         data-aos-easing="ease-in-sine"
//                         data-aos-delay={index * 100}
//                     >
//                         <SkillsCard
//                             icon={skill.icon}
//                             alt={skill.alt}
//                             subtitle={skill.subtitle}
//                             description={skill.description}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </section>
//     )
// }

// export default Skills