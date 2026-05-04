import { useEffect, useState, useCallback } from "react";
import { X } from "lucide-react";

/**
 * Global image lightbox.
 * Listens for clicks on any <img> in the document. Skips images that are:
 *  - inside an <a> or <button>
 *  - opted out via data-no-lightbox
 *  - small (likely icons/avatars/logos)
 * Press Escape or click backdrop to close.
 */
export const Lightbox = () => {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string>("");
  const [alt, setAlt] = useState<string>("");

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const img = target.closest("img") as HTMLImageElement | null;
      if (!img) return;
      if (img.dataset.noLightbox !== undefined) return;
      // Skip images inside interactive ancestors
      if (img.closest("a, button, [role='button']")) return;
      // Skip small images (icons, avatars, logos)
      const rect = img.getBoundingClientRect();
      if (rect.width < 180 || rect.height < 120) return;
      e.preventDefault();
      setSrc(img.currentSrc || img.src);
      setAlt(img.alt || "");
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt || "Image preview"}
      onClick={close}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md p-4 sm:p-8 animate-fade-in"
    >
      <button
        type="button"
        onClick={close}
        aria-label="Close preview"
        className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card/80 text-foreground hover:bg-card transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        data-no-lightbox
        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-zoom-out"
      />
    </div>
  );
};
