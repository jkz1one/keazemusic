type ClipFrameProps = {
  src: string;
  alt?: string;
};

export default function ClipFrame({ src, alt = "" }: ClipFrameProps) {
  return (
    <div className="relative w-full max-w-[600px] aspect-[1/1] mx-auto overflow-hidden rounded-[36px]">
      {/* Define SVG ClipPath */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="crt-clip" clipPathUnits="objectBoundingBox">
            <path d="
              M0.05,0.10 
              Q0.50,-0.05 0.95,0.10 
              Q1,0.35 1,0.50 
              Q1,0.65 0.95,0.90 
              Q0.50,1.05 0.05,0.90 
              Q0,0.65 0,0.50 
              Q0,0.35 0.05,0.10 
              Z
            " />
          </clipPath>
        </defs>
      </svg>

      {/* Image with clip path and centered vertical crop */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          clipPath: "url(#crt-clip)",
          WebkitClipPath: "url(#crt-clip)",
        }}
      />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 rounded-[36px] bg-black/15" />

      {/* Scanlines */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[repeating-linear-gradient(transparent_0px,transparent_1px,rgba(255,255,255,0.08)_3px)] mix-blend-soft-light" />

      {/* Flicker Layer (Tailwind animation class defined below) */}
      <div className="absolute inset-0 z-40 pointer-events-none bg-black animate-flicker" />
      
    </div>
    
  );
}
