const trigger =
  "relative z-50 w-fit cursor-pointer rounded-md font-medium";

const bubble =
  "after:content-[attr(data-tooltip)] after:absolute after:top-[calc(100%+4px)] after:left-1/2 after:-translate-x-1/2 after:-z-[1] after:mt-2 after:px-2.5 after:py-1 after:rounded-md after:bg-primary-light-2 dark:after:bg-primary-dark-2 after:text-text-light dark:after:text-text-dark after:font-regular after:text-[10px] after:text-center after:whitespace-nowrap after:drop-shadow after:invisible after:opacity-0 after:scale-50 after:origin-top after:transition-all hover:after:visible hover:after:opacity-100 hover:after:scale-100";

const arrow =
  "before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:z-0 before:mt-2 before:w-3 before:h-[4px] before:bg-primary-light-2 dark:before:bg-primary-dark-2 before:[clip-path:polygon(50%_0,0_100%,100%_100%)] before:drop-shadow before:invisible before:opacity-0 before:transition-all hover:before:visible hover:before:opacity-100";

export default function Tooltip({ label, children }) {
    return (
        <div
            className={`${trigger} ${bubble} ${arrow}`}
            data-tooltip={label}
            aria-label={label}
        >
            {children}
        </div>
    );
}