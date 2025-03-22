import styles from './Project.module.scss'
import SectionTitle from '../../components/UI/SectionTitle/SectionTitle'
import Carousel from '../../components/UI/Carousel/Carousel'
import projects from '../../data/projects.json'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import { arrowRight, arrowLeft } from '../../assets/icons'

function Project() {
    const { id } = useParams();
    const navigate = useNavigate();

    if (!id) {
        return <Navigate to="/project/0" />
    }

    // Trouver l'index du projet actuel dans le tableau
    const currentProjectIndex = projects.findIndex(p => p.id === id);
    const project = currentProjectIndex !== -1 ? projects[currentProjectIndex] : projects[0];

    // Calculer les indices et IDs des projets précédent et suivant
    const hasPrevious = currentProjectIndex > 0;
    const hasNext = currentProjectIndex < projects.length - 1;

    const previousProjectId = hasPrevious ? projects[currentProjectIndex - 1].id : null;
    const nextProjectId = hasNext ? projects[currentProjectIndex + 1].id : null;

    // Navigation entre projets
    const handleNavigation = (projectId) => {
        if (projectId !== null) {
            navigate(`/project/${projectId}`);
        }
    };

    return (
        <section className={styles.container}>
            <SectionTitle className={styles.container__sectionTitle}>
                Projets
            </SectionTitle>

            <div className={styles.projectLayout}>
                {/* Carousel au lieu d'image statique */}
                <div className={styles.projectLayout__carousel}>
                    <Carousel images={project.images} />
                </div>

                <div className={styles.projectLayout__titleContainer}>
                    <h3 className={styles.projectLayout__projectTitle}>{project.title}</h3>
                </div>

                <div className={styles.projectLayout__stackContainer}>
                    <h4 className={styles.projectLayout__subtitle}>Technologies utilisées</h4>
                    <div className={styles.projectLayout__technologies}>
                        {project.technologies.map(tech => (
                            <span key={tech} className={styles.projectLayout__technology}>{tech}</span>
                        ))}
                    </div>
                </div>

                <div className={styles.projectLayout__descriptionContainer}>
                    <h4 className={styles.projectLayout__subtitle}>À propos du projet</h4>
                    <p className={styles.projectLayout__description}>{project.description}</p>
                </div>

                <div className={styles.projectLayout__linksContainer}>
                    <h4 className={styles.projectLayout__subtitle}>Liens</h4>
                    <div className={styles.projectLayout__links}>
                        {project.links.map(link => (
                            <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.projectLayout__link}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.projectLayout__navigation}>
                <Button
                    img={arrowLeft}
                    onClick={() => handleNavigation(previousProjectId)}
                    disabled={!hasPrevious}
                />
                <Button
                    img={arrowRight}
                    onClick={() => handleNavigation(nextProjectId)}
                    disabled={!hasNext}
                />
            </div>
        </section>
    );
}

export default Project;