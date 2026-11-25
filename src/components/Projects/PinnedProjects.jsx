import ProjectsList from "./ProjectsList";

const projets = [
    { 
        href: "#",
        title: "Plateforme e-commerce",
        desc: "Développement d'une plateforme marchande factice",
        date: "Semestre 3 (en cours) | 2026"
    },
    {
        href: "#",
        title: "Flip 7, jeu de société",
        desc: "lorem ipsum",
        date: "Semestre 2 | 2026"
    },
    {
        href: "#",
        title: "Simulation de particules",
        desc: "Simulateur de particules 2D en temps réel.",
        date: "Semestre 1 | 2025"
    }
]

export default function PinnedProjects() {
    return (
        <>
            <ProjectsList list={projets} />
        </>
    )
}