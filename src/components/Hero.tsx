export const Hero = () => (
    <section
        id="beranda"
        className="relative flex flex-col items-center justify-center text-center px-6 pt-36 pb-24 min-h-[92vh] overflow-hidden"
    >
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
                background:
                    "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(251,191,36,0.08), transparent 60%)",
            }}
        />

        <h1 className="font-display mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">
            GALLERY
        </h1>
        <p className="mt-4 max-w-xl text-base md:text-lg text-neutral-400 text-balance">
            Galeri karya <span className="text-white">Nasrul Aditri Rahmandika</span> — fotografi,
            editing, dan desain grafis dalam satu galeri.
        </p>

        <a
            href="#galeri"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-neutral-950 transition-transform duration-200 hover:scale-105"
        >
            Lihat Galeri
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
            </svg>
        </a>
    </section>
);
