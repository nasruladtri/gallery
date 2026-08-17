import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Gallery />
            </main>
            <Footer />
        </>
    );
}
