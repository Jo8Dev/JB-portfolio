import { useEffect } from 'react'
import styles from './Project.module.scss'
import SectionTitle from '../../components/UI/SectionTitle/SectionTitle'
import Carousel from '../../components/UI/Carousel/Carousel'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import { arrowRight, arrowLeft } from '../../assets/icons'
import { projectUrl } from '../../services/config'
import { useFetch } from '../../hooks/useFetch'
import Loader from '../../components/UI/Loader/Loader'
import { motion } from 'motion/react'
import { SHADOWS } from '../../constants/animation'

function Project() {
    const { id } = useParams() // Récupère l'ID du projet depuis l'URL
    const navigate = useNavigate() // Récupère la fonction de navigation

    // Fetch tous les projets
    const { data: projects, loading, error } = useFetch(projectUrl) // Utilise le hook personnalisé pour récupérer les données des projets

    // Redirige si l'ID n'existe pas
    useEffect(() => {
        if (!loading && !error && projects) {
            const projectExists = projects.some(p => p.id === id)
            if (!projectExists) {
                navigate('/project/0', { replace: true })
            }
        }
    }, [id, projects, loading, error, navigate])

    // Gestion des états de chargement et d'erreur
    if (loading) return (
        <section className={styles.container}>
            <SectionTitle className={styles.container__sectionTitle}>Projets</SectionTitle>
            <Loader />
        </section>
    )

    // Affiche une erreur si le fetch échoue
    if (error) return (
        <section className={styles.container}>
            <SectionTitle className={styles.container__sectionTitle}>Projets</SectionTitle>
            <div className={styles.error}>Impossible de charger les projets: {error}</div>
        </section>
    )

    // Si pas encore de données, ne rien afficher
    if (!projects) return null

    // Trouver le projet actuel
    const currentProjectIndex = projects.findIndex(p => p.id === id) // Trouve l'index du projet actuel
    const project = currentProjectIndex !== -1 ? projects[currentProjectIndex] : projects[0]// // Si l'index est valide, récupère le projet, sinon prend le premier projet

    // Navigation
    const hasPrevious = currentProjectIndex > 0 // Vérifie s'il y a un projet précédent
    const hasNext = currentProjectIndex < projects.length - 1 // Vérifie s'il y a un projet suivant

    const previousProjectId = hasPrevious ? projects[currentProjectIndex - 1].id : null // Récupère l'ID du projet précédent
    const nextProjectId = hasNext ? projects[currentProjectIndex + 1].id : null // Récupère l'ID du projet suivant

    const handleNavigation = (projectId) => {
        if (projectId !== null) {
            navigate(`/project/${projectId}`)
        }
    }

    const shadowInsetAnimation = {
        initial: { boxShadow: "none" },
        whileInView: { boxShadow: SHADOWS.INSET },
        viewport: { once: true, amount: 0.5 },
        transition: { duration: 0.5 }
    }
    const shadowOutsetAnimation = {
        initial: { boxShadow: "none" },
        whileInView: { boxShadow: SHADOWS.OUTSET },
        viewport: { once: true, amount: 0.5 },
        transition: { duration: 0.5 }
    }

    return (
        <section className={styles.container}>
            <SectionTitle className={styles.container__sectionTitle} hx="h1">
                Projets
            </SectionTitle>

            <div className={styles.container__navigation}>
                <Button
                    img={arrowLeft}
                    onClick={() => handleNavigation(previousProjectId)}
                    disabled={!hasPrevious}
                />
                <span className={styles.projectLayout__numerotation}>{`${parseInt(project.id) + 1}/${projects.length}`}</span>
                <Button
                    img={arrowRight}
                    onClick={() => handleNavigation(nextProjectId)}
                    disabled={!hasNext}
                />
            </div>

            <div className={styles.projectLayout}>
                <motion.div className={styles.projectLayout__carousel} {...shadowOutsetAnimation}>
                    {/* La clé force la réinitialisation du carousel quand l'ID change */}
                    <Carousel images={project.images} key={project.id} />
                </motion.div>

                <motion.div className={styles.projectLayout__titleContainer} {...shadowInsetAnimation}>
                    <h3 className={styles.projectLayout__projectTitle}>{project.title}</h3>
                </motion.div>

                <motion.div className={styles.projectLayout__stackContainer}{...shadowInsetAnimation}>
                    <h4 className={styles.projectLayout__subtitle}>Technologies utilisées</h4>
                    <div className={styles.projectLayout__technologies}>
                        {project.technologies.map(tech => (
                            <motion.span key={tech} className={styles.projectLayout__technology} {...shadowInsetAnimation}>{tech}</motion.span>
                        ))}
                    </div>
                </motion.div>

                <motion.div className={styles.projectLayout__descriptionContainer} {...shadowInsetAnimation}>
                    <h4 className={styles.projectLayout__subtitle}>À propos du projet</h4>
                    <p className={styles.projectLayout__description}>{project.description}</p>
                </motion.div>

                <motion.div className={styles.projectLayout__linksContainer} {...shadowOutsetAnimation}>

                    <h4 className={styles.projectLayout__subtitle}>Liens</h4>
                    <div className={styles.projectLayout__links}>
                        {project.links.map(link => (
                            <Button
                                key={link.label}
                                text={link.label}
                                href={link.url}
                                external={true}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Project