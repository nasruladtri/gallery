"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { categories, categoryLabels, galleryItems, type CategoryId, type GalleryItem } from "@/data/gallery";

const ChevronIcon = ({ direction }: { direction: "left" | "right" }) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={direction === "left" ? "rotate-180" : ""}
    >
        <path d="m9 18 6-6-6-6" />
    </svg>
);

const CloseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>
);

export const Gallery = () => {
    const [active, setActive] = useState<CategoryId>("semua");
    const [lightbox, setLightbox] = useState<{ items: GalleryItem[]; index: number } | null>(null);

    const items = active === "semua" ? galleryItems : galleryItems.filter((item) => item.category === active);

    const close = useCallback(() => setLightbox(null), []);

    const navigate = useCallback(
        (delta: number) => {
            setLightbox((current) => {
                if (!current) return null;
                const next = (current.index + delta + current.items.length) % current.items.length;
                return { ...current, index: next };
            });
        },
        []
    );

    useEffect(() => {
        if (!lightbox) return;
        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") close();
            if (event.key === "ArrowLeft") navigate(-1);
            if (event.key === "ArrowRight") navigate(1);
        };
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [lightbox, close, navigate]);

    return (
        <section id="galeri" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12">
                    <span className="text-xs uppercase tracking-widest text-accent">Koleksi</span>
                    <h2 className="font-display mt-2 text-3xl md:text-4xl font-bold tracking-tight">Galeri Karya</h2>
                    <p className="mt-3 max-w-lg text-neutral-400">
                        Jelajahi setiap karya — dari bidikan kamera, hasil retouch, hingga desain yang
                        dikerjakan dari nol.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActive(category.id)}
                            className={`rounded-full px-4 py-2 text-sm transition-colors border ${
                                active === category.id
                                    ? "bg-white text-neutral-950 border-white"
                                    : "bg-white/5 text-neutral-300 border-white/10 hover:border-white/30 hover:text-white"
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div key={active} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 fade-up">
                    {items.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setLightbox({ items, index: items.indexOf(item) })}
                            className={`group relative overflow-hidden rounded-lg ${item.aspect} bg-neutral-900`}
                        >
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-x-0 bottom-0 p-4 text-left opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                <p className="text-xs uppercase tracking-widest text-accent">
                                    {categoryLabels[item.category]}
                                </p>
                                <p className="font-display font-semibold">{item.title}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {lightbox && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8 zoom-in"
                    onClick={close}
                    role="dialog"
                    aria-modal="true"
                >
                    <button
                        className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors"
                        onClick={close}
                        aria-label="Tutup"
                    >
                        <CloseIcon />
                    </button>

                    <button
                        className="absolute left-3 sm:left-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors"
                        onClick={(event) => {
                            event.stopPropagation();
                            navigate(-1);
                        }}
                        aria-label="Sebelumnya"
                    >
                        <ChevronIcon direction="left" />
                    </button>

                    <button
                        className="absolute right-3 sm:right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors"
                        onClick={(event) => {
                            event.stopPropagation();
                            navigate(1);
                        }}
                        aria-label="Berikutnya"
                    >
                        <ChevronIcon direction="right" />
                    </button>

                    <div className="relative w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-900">
                            <Image
                                src={lightbox.items[lightbox.index].src}
                                alt={lightbox.items[lightbox.index].title}
                                fill
                                sizes="(max-width: 1280px) 100vw, 896px"
                                className="object-contain"
                            />
                        </div>
                        <div className="mt-4 flex items-center justify-between gap-4">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-accent">
                                    {categoryLabels[lightbox.items[lightbox.index].category]}
                                </p>
                                <p className="font-display text-lg font-semibold">
                                    {lightbox.items[lightbox.index].title}
                                </p>
                            </div>
                            <p className="text-sm text-neutral-500">
                                {lightbox.index + 1} / {lightbox.items.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
