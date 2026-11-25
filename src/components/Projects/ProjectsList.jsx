import ProjectCard from "./ProjectCard";

export default function ProjectsList({ list }) {
    return( 
        <ol className="flex flex-col gap-2">
            {list.map(elem =>(
                <ProjectCard href={elem.href} title={elem.title} description={elem.desc} date={elem.date} />
            ))}
        </ol>
    )
}