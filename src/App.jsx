import Navbar from './components/Navbar/Navbar'
import './App.css'
import Hero from './components/Hero/Hero'
import Section from './components/Section/Section'
import ProjectWidget from './components/Projects/ProjectWidget'
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
            
            
            <ProjectWidget
            href={"#"}
            title={"Plateforme e-commerce"}
            description={"Développement d'une plateforme marchande factice"}
            date={"Semestre 3 (en cours) | 2026"}
            />
            <ProjectWidget
            href={"#"}
            title={"Flip 7, jeu de société"}
            description={"lorem ipsum"}
            date={"Semestre 2 | 2026"}
             />
            <ProjectWidget
            href={"#"}
            title={"Simulation de particules"}
            description={"Simulateur de particules 2D en temps réel."}
            date={"Semestre 1 | 2025"}
            />
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
