export default function Button({ id, children }) {
    return(
        <button
        id={id}
        className="bg-emerald-300 border border-emerald-500
        text-text-light font-code
        px-4 py-2
        hover:cursor-pointer hover:translate-x-1 hover:-translate-y-1 hover:shadow-box-light dark:hover:shadow-box-dark
        active:translate-0 active:shadow-none dark:active:shadow-none
        transition-all duration-300">
            {children}
        </button>
    );
}