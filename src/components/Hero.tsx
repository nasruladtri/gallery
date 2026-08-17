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

        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-widest uppercase text-neutral-300">
            Portfolio Gallery
        </span>

        <h1 className="font-display mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">
            Foto. Editan. Desain.
        </h1>
        <p className="mt-4 max-w-xl text-base md:text-lg text-neutral-400 text-balance">
            Kumpulan karya <span className="text-white">Nasrul Aditri Rahmandika</span> — fotografi,
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

        <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-12 text-center">
            {[
                { value: "12+", label: "Karya" },
                { value: "3", label: "Kategori" },
                { value: "∞", label: "Ide" },
            ].map((stat) => (
                <div key={stat.label}>
                    <p className="font-display text-2xl sm:text-3xl font-bold text-accent">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-neutral-500">{stat.label}</p>
                </div>
            ))}
        </div>
    </section>
);
