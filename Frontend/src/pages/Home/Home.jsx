import Hero from "../../components/Sections/Hero/Hero"
import InProgress from "../../components/Sections/InProgress/InProgress"
import Skills from "../../components/Sections/Skills/Skills"
import Stack from "../../components/Sections/Stack/Stack"

function Home() {

    return (
        <>
            <Hero />
            <Skills />
            <Stack />
            <InProgress />
        </>
    )
}

export default Home