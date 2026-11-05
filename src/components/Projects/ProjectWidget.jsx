export default function ProjectWidget({ href, title, description, date }) {
    return (
        <div
        className="w-full h-20 px-4 py-2 bg-primary-light-2 dark:bg-primary-dark-2">
            <div className="flex justify-between">
                <h3 className="font-regular font-semibold dark:font-medium text-2xl text-text-light dark:text-text-dark">
                    <a href={href} 
                    className="flex gap-1 items-center hover:text-emerald-500 dark:hover:text-emerald-300 hover:underline transition-colors duration-200">
                        {title}
                    </a>
                </h3>

                <p className="text-text-light-muted dark:text-text-dark-muted font-light">
                    {date}
                </p>
            </div>
            <div className="font-code text-l text-text-light-muted dark:text-text-dark-muted py-1">
                {description}
            </div>
        </div>
    );
}