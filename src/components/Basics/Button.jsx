export default function Button({ id, children }) {
    return(
        <button
        id={id}
        className="bg-emerald-300 border-b-emerald-600 text-text-light font-code px-4 py-2 hover:cursor-pointer transition-all duration-300">
            {children}
        </button>
    );
}