const colsMap = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
};

const colsMdMap = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
  6: "md:grid-cols-6",
};

export default function BentoLayout({ children, cols = 1, colsMd = 5 }) {
  return (
    <div className={`grid ${colsMap[cols]} ${colsMdMap[colsMd]} gap-2`}>
      {children}
    </div>
  );
}