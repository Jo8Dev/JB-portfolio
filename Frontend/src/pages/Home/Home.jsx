import Hero from "../../components/Sections/Hero/Hero"
import InProgress from "../../components/Sections/InProgress/InProgress"
// import Skills from "../../components/Sections/Skills/Skills"
import Skills2 from "../../components/Sections/Skills2/Skills2"
import Stack from "../../components/Sections/Stack/Stack"

function Home() {

    return (
        <>
            <Hero />
            <Skills2 />
            {/* <Skills /> */}
            <Stack />
            <InProgress />
        </>
    )
}

export default Home