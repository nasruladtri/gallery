"use client";

import { useEffect, useState } from "react";
import { PixelLogo } from "./Logo";

const NAV_LINKS = [
    { href: "#beranda", label: "Beranda" },
    { href: "#galeri", label: "Galeri" },
    { href: "#kontak", label: "Kontak" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
                scrolled
                    ? "bg-neutral-950/80 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
                <a href="#beranda" className="flex items-center gap-3" aria-label="Nasrul Aditri Rahmandika">
                    <PixelLogo size={40} />
                    <span className="font-display text-lg font-bold tracking-tight">
                        NASRUL <span className="text-accent">ADITRI</span>
                    </span>
                </a>
                <ul className="hidden sm:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm text-neutral-300 hover:text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <a
                    href="#galeri"
                    className="sm:hidden text-sm text-neutral-300 hover:text-white transition-colors"
                >
                    Galeri
                </a>
            </nav>
        </header>
    );
};
