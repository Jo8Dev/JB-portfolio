import styles from './ProjectsGrid.module.scss'
import SectionTitle from '../../UI/SectionTitle/SectionTitle'
import { useFetch } from '../../../hooks/useFetch'
import { projectUrl } from '../../../services/config'
import Loader from '../../UI/Loader/Loader'
import SectionShadowInset from '../../UI/SectionShadowInset/SectionShadowInset'
import ProjectsGridCard from '../../UI/ProjectsGridCard/ProjectsGridCard'
import Button from '../../UI/Button/Button'

function ProjectsGrid() {
    const { data: projects, loading, error } = useFetch(projectUrl)

    if (loading) return <Loader />
    if (error) return <div className={styles.error}>Impossible de charger les projets</div>
    if (!projects) return null

    return (
        <SectionShadowInset className={styles.projectsGrid}>
            <SectionTitle className={styles.projectsGrid__title}>Mes Projets</SectionTitle>

            <div className={styles.projectsGrid__container}>
                {projects.map((project, index) => (
                    <ProjectsGridCard
                        key={project.id}
                        {...project}
                        index={index} // Transmettez l'index pour l'animation en cascade
                    />
                ))}
            </div>
            <Button text={"Consultez mes projets"} link={"project"} />
        </SectionShadowInset>
    );
}
export default ProjectsGrid;