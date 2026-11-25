import BentoLayout from "../Basics/Bento/BentoLayout"
import BentoBox from "../Basics/Bento/BentoBox"
import Timeline from "../Basics/Timeline/Timeline"

const education = [
    { name: "BUT Informatique", date: "2025-2028", location: "Nantes" },
    { name: "Baccalauréat Général (Maths & NSI)", date: "2025", location: "Ancenis" }
]

const experience = [
    { name: "CapGemini", date: "2023", location: "Nantes"}
]

export default function AboutBento() {
    return (
        <>
            <BentoLayout cols={1} colsMd={5}>
                <BentoBox span={1} spanMd={5} >
                    <h3 className="font-fluid text-xl text-text-light dark:text-text-dark">
                        Profil
                    </h3>
                    <p className="pl-1 font-regular text-text-light dark:text-text-dark">
                        Étudiant en 2e année de BUT Informatique à l’IUT de Nantes, je recherche un stage de développement logiciel / web de 8
à 12 semaines à partir du 14 avril 2027. À travers mes projets académiques et personnels, j’ai développé des compétences
en programmation orientée objet, conception logicielle, développement web et tests.
                    </p>
                </BentoBox>
                <BentoBox span={1} spanMd={3}>
                    <h3 className="font-fluid text-xl text-text-light dark:text-text-dark">
                        Formation
                    </h3>
                    <Timeline list={education} />
                </BentoBox>
                <BentoBox span={1} spanMd={2} >
                    <h3 className="font-fluid text-xl text-text-light dark:text-text-dark">
                        Expérience
                    </h3>
                    <Timeline list={experience}/>
                </BentoBox>
            </BentoLayout>
        </>
    )
}