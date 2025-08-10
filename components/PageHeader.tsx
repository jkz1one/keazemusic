type PageHeaderProps = {
  title: string;
  image: string;
};

export default function PageHeader({ title, image }: PageHeaderProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-4">
      {/* Image Container */}
      <div className="relative w-[90%] max-w-[1000px] h-[150px] overflow-hidden rounded">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-black/15 rounded" />

        {/* Scanlines */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-[repeating-linear-gradient(transparent_0px,transparent_1px,rgba(255,255,255,0.08)_3px)] mix-blend-soft-light" />

        {/* Flicker Layer */}
        <div className="absolute inset-0 z-30 pointer-events-none bg-black animate-flicker" />
      </div>

      {/* Title */}
      <h1 className="mt-6 text-4xl md:text-7xl font-semibold text-white tracking-wide text-center font-sans">
        {title}
      </h1>
    </div>
  );
}
