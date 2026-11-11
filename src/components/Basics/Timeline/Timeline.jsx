import TimelineElem from "./TimelineElem"

export default function Timeline({ list }) {
    return (
        <ol className="flex flex-col gap-2 ml-4 mt-2 border-l border-s border-border-grey">
            {list.map(elem => (
                <TimelineElem title={elem.name} date={elem.date} location={elem.location} />
            ))}
        </ol>
    )
}