"use client";

import { useEffect, useRef, useState } from "react";

interface ProductGalleryProps {
  images: File[];
  onUpload: (files: File[]) => void;
}

export default function ProductGallery({ images, onUpload }: ProductGalleryProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [objectUrls, setObjectUrls] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dragCounterRef = useRef(0);

  useEffect(() => {
    const urls = images.map((file) => URL.createObjectURL(file));
    setObjectUrls(urls);
    return () => {
      for (const url of urls) {
        URL.revokeObjectURL(url);
      }
    };
  }, [images]);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const mediaFiles = Array.from(files).filter(
      (f) => f.type.startsWith("image/") || f.type.startsWith("video/"),
    );
    if (mediaFiles.length > 0) onUpload(mediaFiles);
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounterRef.current += 1;
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounterRef.current -= 1;
    if (dragCounterRef.current === 0) setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounterRef.current = 0;
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  if (images.length === 0) {
    return (
      <div
        onClick={() => inputRef.current?.click()}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`flex flex-col items-center justify-center cursor-pointer border transition-colors duration-150 select-none ${
          isDragging
            ? "border-black bg-[#f5f5f5]"
            : "border-[#e5e5e5] bg-white hover:border-black"
        }`}
        style={{ minHeight: "480px" }}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept="image/*,video/*"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#999] mb-5"
        >
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <p className="text-[11px] uppercase tracking-[0.12em] text-black font-medium mb-1.5">
          Drop images or videos here
        </p>
        <p className="text-[11px] text-[#999] tracking-[0.06em]">or click to browse</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {objectUrls.map((src, index) => (
        <div
          key={src}
          className="relative bg-white"
          style={{ aspectRatio: "3/4" }}
        >
          {images[index]?.type.startsWith("video/") ? (
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            >
              <track kind="captions" />
            </video>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={`Uploaded image ${index + 1}`}
              className="w-full h-full object-contain"
            />
          )}
        </div>
      ))}
    </div>
  );
}
