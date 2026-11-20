import React, { useState } from "react";
import { cn } from "../../lib/utils";

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  className,
  containerClassName,
  fallbackTitle,
  priority = false,
}: EditorialImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#E7E3DC] dark:bg-[#1E1E1E]",
        containerClassName
      )}
    >
      {failed ? (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#ECE8E1] to-[#DED8CE] p-6 text-center dark:from-[#1B1B1B] dark:to-[#121212]">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#FF6044]">
            ▪ LADESTACK ARCHIVE
          </span>
          <span className="mt-2 font-sans text-sm font-bold uppercase tracking-tight text-[#121212]/70 dark:text-white/70">
            {fallbackTitle || alt}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className={cn("h-full w-full object-cover", className)}
        />
      )}
    </div>
  );
}
