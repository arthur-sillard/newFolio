export default function ProjectWidget({ href, title, description, date }) {
    return (
        <div
        className="flex flex-col gap-1 w-full h-fit px-4 py-2 bg-primary-light-2 dark:bg-primary-dark-2">
            <div className="flex flex-col md:flex-row justify-between">
                <h3 className="font-code font-medium dark:font-light text-2xl text-text-light dark:text-text-dark">
                    <a href={href} 
                    className="flex gap-1 items-center hover:text-emerald-500 dark:hover:text-emerald-300 hover:underline transition-colors duration-200">
                        {title}
                    </a>
                </h3>

                <p className="font-dotted font-semibold text-text-light dark:text-text-dark">
                    {date}
                </p>
            </div>
            <div className="font-code text-l text-text-light-muted dark:text-text-dark-muted">
                {description}
            </div>
        </div>
    );
}