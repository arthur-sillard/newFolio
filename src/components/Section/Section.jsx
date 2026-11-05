export default function Section({ id, title, children }) {
    return (
        <section
        id={id} 
        className="mt-8 py-3">
            <div className="">
                <h1 className="font-regular font-semibold dark:font-medium text-2xl tracking-tight text-text-light dark:text-text-dark">
                    {title}
                </h1>
            </div>
            <div className="px-1 py-4 flex flex-col gap-4">
                {children}
            </div>
        </section>
    );
}