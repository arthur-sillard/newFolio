const spanMap = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
};

const spanMdMap = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
};

export default function BentoBox({ children, span = 1, spanMd = 1 }) {
  return (
    <div
      className={`${spanMap[span]} ${spanMdMap[spanMd]} bg-primary-light-2 dark:bg-primary-dark-2 border border-border-grey px-4 py-2`}
    >
      {children}
    </div>
  );
}