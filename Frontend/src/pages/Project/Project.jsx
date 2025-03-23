import { useEffect } from 'react';
import styles from './Project.module.scss';
import SectionTitle from '../../components/UI/SectionTitle/SectionTitle';
import Carousel from '../../components/UI/Carousel/Carousel';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import { arrowRight, arrowLeft } from '../../assets/icons';
import { projectUrl } from '../../services/config';
import { useFetch } from '../../hooks/useFetch';

function Project() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Fetch tous les projets
    const { data: projects, loading, error } = useFetch(projectUrl);

    // Redirige si l'ID n'existe pas
    useEffect(() => {
        if (!loading && !error && projects) {
            const projectExists = projects.some(p => p.id === id);
            if (!projectExists) {
                navigate('/project/0', { replace: true });
            }
        }
    }, [id, projects, loading, error, navigate]);

    // Gestion des états de chargement et d'erreur
    if (loading) return (
        <section className={styles.container}>
            <SectionTitle className={styles.container__sectionTitle}>Projets</SectionTitle>
            <div className={styles.loading}>Chargement du projet...</div>
        </section>
    );

    if (error) return (
        <section className={styles.container}>
            <SectionTitle className={styles.container__sectionTitle}>Projets</SectionTitle>
            <div className={styles.error}>Impossible de charger les projets: {error}</div>
        </section>
    );

    // Si pas encore de données, ne rien afficher
    if (!projects) return null;

    // Trouver le projet actuel
    const currentProjectIndex = projects.findIndex(p => p.id === id);
    const project = currentProjectIndex !== -1 ? projects[currentProjectIndex] : projects[0];

    // Navigation
    const hasPrevious = currentProjectIndex > 0;
    const hasNext = currentProjectIndex < projects.length - 1;

    const previousProjectId = hasPrevious ? projects[currentProjectIndex - 1].id : null;
    const nextProjectId = hasNext ? projects[currentProjectIndex + 1].id : null;

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

            <div className={styles.container__navigation}>
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

            <div className={styles.projectLayout}>
                <div className={styles.projectLayout__carousel}>
                    {/* La clé force la réinitialisation du carousel quand l'ID change */}
                    <Carousel images={project.images} key={project.id} />
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
        </section>
    );
}

export default Project;