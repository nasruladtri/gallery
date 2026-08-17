import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
});

const SITE_URL = "https://gallery-virid-phi.vercel.app";
const SITE_TITLE = "Nasrul Aditri Rahmandika | Galeri Foto & Desain";
const SITE_DESCRIPTION =
    "Galeri karya Nasrul Aditri Rahmandika - fotografi, editing, dan desain grafis dalam satu tempat. Jelajahi koleksi foto, hasil editan, dan desain terbaru.";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_TITLE,
        template: "%s | Nasrul Aditri Rahmandika",
    },
    description: SITE_DESCRIPTION,
    applicationName: "Nasrul Aditri Rahmandika",
    keywords: [
        "Nasrul Aditri Rahmandika",
        "Nasrul Aditri",
        "Galeri Foto",
        "Fotografi Indonesia",
        "Editing Foto",
        "Desain Grafis",
        "Jasa Editing Foto",
        "Jasa Desain",
        "Nasrul Aditri Madiun",
        "Portfolio Desain",
    ],
    authors: [{ name: "Nasrul Aditri Rahmandika", url: SITE_URL }],
    creator: "Nasrul Aditri Rahmandika",
    icons: {
        icon: [{ url: "/icon.png", type: "image/png" }, { url: "/favicon.ico", type: "image/x-icon" }],
        apple: [{ url: "/apple-icon.png", type: "image/png" }],
    },
    openGraph: {
        type: "website",
        url: SITE_URL,
        siteName: "Nasrul Aditri Rahmandika",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        locale: "id_ID",
        images: [
            {
                url: "/logo.png",
                width: 2000,
                height: 2000,
                alt: "Logo Nasrul Aditri Rahmandika",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        images: ["/logo.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: SITE_URL,
    },
    verification: {
        google: "google028f41148c4f2188",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Nasrul Aditri Rahmandika",
                            url: SITE_URL,
                            jobTitle: "Fotografer & Desainer Grafis",
                            description:
                                "Fotografer, editor, dan desainer grafis - fotografi, editing, dan desain grafis.",
                            image: `${SITE_URL}/logo.png`,
                            sameAs: [
                                "https://github.com/nasruladtri",
                                "https://www.youtube.com/@nasruladitri",
                                "https://www.instagram.com/nasruladt",
                                "https://www.nasruladitri.space",
                            ],
                        }),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: "Nasrul Aditri Rahmandika",
                            alternateName: "Nasrul Aditri",
                            url: SITE_URL,
                            description: SITE_DESCRIPTION,
                            inLanguage: "id-ID",
                        }),
                    }}
                />
            </head>
            <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100">
                {children}
            </body>
        </html>
    );
}