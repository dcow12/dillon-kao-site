import type { CSSProperties } from "react";
import type { Img } from "@/content/projects";

// A framed project image. Photos and screenshots fill the frame; charts and drawings
// (`panel`) sit uncropped on a light background so they read on the black page.
export function ProjectImage({ img, className = "", eager = false }: { img: Img; className?: string; eager?: boolean }) {
  return (
    <figure className={`pimg ${img.panel ? "pimg-panel" : ""} ${img.natural ? "pimg-natural" : ""} ${className}`}>
      <div className="pimg-frame" style={img.panel ? ({ "--panel": img.panel } as CSSProperties) : undefined}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img.src} alt={img.alt} loading={eager ? "eager" : "lazy"} decoding="async" />
      </div>
      {img.caption ? <figcaption>{img.caption}</figcaption> : null}
    </figure>
  );
}
