import { useHideOnScroll } from "../../hooks/useHideOnScroll";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import Tooltip from "../Basics/Tooltip";

export default function Navbar() {
    const hidden = useHideOnScroll()

    return (
        <nav
            className={`flex justify-center fixed top-0 inset-x-0 z-50 backdrop-blur-2xl transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
        >
            <div className="flex items-center justify-between px-4 py-2 w-4xl">
                <a href="/" className="text-text-light dark:text-text-dark text-2xl tracking-tight font-fluid font-semibold">
                    Arthur Sillard
                </a>

                <div className="hidden md:flex items-center gap-4">
                    <div>
                        <NavLink href="#projects">Projets</NavLink>
                        <NavLink href="#about">À propos</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </div>
                    <Tooltip label="Changer de thème">
                        <ThemeToggle />
                    </Tooltip>
                </div>

                <div className="md:hidden">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="size-8 text-text-light dark:text-text-dark">
                        <path d="M20 18H4v-2h16v2Zm0-5H4v-2h16v2Zm0-5H4V6h16v2Z" />
                    </svg>

                </div>
            </div>
        </nav>
    )
}