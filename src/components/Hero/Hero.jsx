import Button from "../Basics/Button";

export default function Hero() {
    return (
        <div className="pt-20 md:pt-40 mb-10 md:mb-20">
            <h1 class="text-text-light dark:text-text-dark text-xl sm:text-2xl md:text-3xl tracking-tight font-semibold font-fluid">
                Bonjour, je suis Arthur <br/>
                Étudiant en BUT informatique
            </h1>
            <p class="text-text-light-muted dark:text-text-dark-muted mb-4 font-regular">
                IUT de Nantes
            </p>
            <Button id={"resume-preview-button"}>
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="size-6">
                        <path d="M16 20H8v-2h8v2Zm-8-2H4v-2h4v2Zm12 0h-4v-2h4v2ZM4 16H2v-2h2v2Zm10-6h-2v2h2v-2h2v4h-2v2h-4v-2H8v-4h2V8h4v2Zm8 6h-2v-2h2v2ZM2 14H0v-4h2v4Zm22 0h-2v-4h2v4ZM4 10H2V8h2v2Zm18 0h-2V8h2v2ZM8 8H4V6h4v2Zm12 0h-4V6h4v2Zm-4-2H8V4h8v2Z"></path>
                    </svg>
                    <p>Mon CV</p>
                </div>
                
            </Button>
        </div>
    );
}