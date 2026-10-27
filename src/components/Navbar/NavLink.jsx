export default function NavLink({ href, children }) {
    return (
        <a href={href} className="text-text-light-muted dark:text-text-dark-muted font-regular hover:text-text-light dark:hover:text-text-dark hover:underline transition-colors duration-300 px-4 py-2">
            {children}
        </a>
    )
}