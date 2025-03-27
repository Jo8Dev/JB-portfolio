import About from "../../components/Sections/About/About"
import Hero from "../../components/Sections/Hero/Hero"
import InProgress from "../../components/Sections/InProgress/InProgress"
import ProjectsGrid from "../../components/Sections/ProjectsGrid/ProjectsGrid"
import Skills from "../../components/Sections/Skills/Skills"
import Stack from "../../components/Sections/Stack/Stack"

function Home() {


    return (
        <>
            <Hero />
            <Skills />
            <Stack />
            <ProjectsGrid />
            <InProgress />
            <About />

        </>
    )
}

export default Home