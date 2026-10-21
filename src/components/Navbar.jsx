import { useHideOnScroll } from "../hooks/useHideOnScroll";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import Tooltip from "./Tooltip";

export default function Navbar() {
    const hidden = useHideOnScroll()

    return (
        <nav
            className={`flex justify-center fixed top-0 inset-x-0 z-50 backdrop-blur-2xl transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
        >
            <div className="flex items-center justify-between px-4 py-2 w-full lg:w-1/2 bg-primary-dark-2">
                <a href="/" className="text-text-light dark:text-text-dark text-xl tracking-tight font-semibold">
                    Arthur Sillard
                </a>

                <div className="hidden md:flex items-center gap-4">
                    <div>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/projects">Projects</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                    </div>
                    <Tooltip label="Change theme">
                        <ThemeToggle />
                    </Tooltip>
                </div>

                <div className="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-text-light dark:text-text-dark">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </div>
            </div>
        </nav>
    )
}