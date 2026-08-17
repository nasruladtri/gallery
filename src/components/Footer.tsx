import { PixelLogo } from "./Logo";

const SOCIALS = [
    {
        label: "GitHub",
        href: "https://github.com/nasruladtri",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
        ),
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@nasruladitri",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/nasruladt",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="20" x="2" y="2" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
        ),
    },
];

export const Footer = () => (
    <footer id="kontak" className="mt-auto border-t border-white/10 bg-neutral-900/40">
        <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col items-center gap-6">
            <a href="#beranda" className="flex items-center gap-3" aria-label="Nasrul Aditri Rahmandika">
                <PixelLogo size={40} />
                <span className="font-display text-lg font-bold tracking-tight">
                    NASRUL <span className="text-accent">ADITRI</span>
                </span>
            </a>

            <div className="flex items-center gap-3">
                <a
                    href="https://www.nasruladitri.space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-neutral-200 hover:text-white hover:border-white/40 transition-colors"
                >
                    Lihat Website Utama →
                </a>
            </div>

            <div className="flex items-center gap-3">
                {SOCIALS.map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-300 hover:text-white hover:border-white/30 transition-colors"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>

            <p className="text-sm text-neutral-500">
                © {new Date().getFullYear()} Nasrul Aditri Rahmandika. Semua karya dilindungi.
            </p>
        </div>
    </footer>
);
