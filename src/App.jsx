import Navbar from './components/Navbar/Navbar'
import './App.css'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'
import PinnedProjects from './components/Projects/PinnedProjects'
import AboutBento from './components/About/AboutBento'


function App() {
  return (
    <>
      <div className="bg-primary-light-1 dark:bg-primary-dark-1 min-h-dvh h-full flex flex-col items-center antialiased">
        <Navbar />
        <div className='w-full h-15'></div>

        <div className='flex flex-col w-full md:w-3xl px-4'>
          <Hero />

          <Section id={"projects"} title={"Projets"}>
            <PinnedProjects />
          </Section>

          <Section id={"about"} title={"À propos"}>
            <AboutBento />
          </Section>

          <Section id={"contact"} title={"Contactez moi !"}>
           
          </Section>
          
        </div>
      </div>
    </>
  )
}




export default App
