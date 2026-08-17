export type CategoryId = "semua" | "foto" | "editan" | "desain";

export type GalleryItem = {
    id: number;
    title: string;
    category: Exclude<CategoryId, "semua">;
    src: string;
    aspect: string;
};

export const categories: { id: CategoryId; label: string }[] = [
    { id: "semua", label: "Semua" },
    { id: "foto", label: "Foto" },
    { id: "editan", label: "Editan" },
    { id: "desain", label: "Desain" },
];

export const categoryLabels: Record<GalleryItem["category"], string> = {
    foto: "Foto",
    editan: "Editan",
    desain: "Desain",
};

export const galleryItems: GalleryItem[] = [
    { id: 1, title: "Golden Hour", category: "foto", src: "https://picsum.photos/seed/goldenhour/900/1100", aspect: "aspect-[4/5]" },
    { id: 2, title: "Street View", category: "foto", src: "https://picsum.photos/seed/streetview/1100/800", aspect: "aspect-[4/3]" },
    { id: 3, title: "Moody Portrait", category: "foto", src: "https://picsum.photos/seed/moody/900/900", aspect: "aspect-square" },
    { id: 4, title: "Cinematic Grade", category: "editan", src: "https://picsum.photos/seed/cinegrade/1100/800", aspect: "aspect-[4/3]" },
    { id: 5, title: "Color Pop", category: "editan", src: "https://picsum.photos/seed/colorpop/900/1100", aspect: "aspect-[4/5]" },
    { id: 6, title: "Mist & Tone", category: "editan", src: "https://picsum.photos/seed/misttone/900/900", aspect: "aspect-square" },
    { id: 7, title: "Poster Series", category: "desain", src: "https://picsum.photos/seed/poster1/900/1100", aspect: "aspect-[4/5]" },
    { id: 8, title: "Brand Identity", category: "desain", src: "https://picsum.photos/seed/brand1/1100/800", aspect: "aspect-[4/3]" },
    { id: 9, title: "Thumbnail Design", category: "desain", src: "https://picsum.photos/seed/thumb1/900/900", aspect: "aspect-square" },
    { id: 10, title: "Night Walk", category: "foto", src: "https://picsum.photos/seed/nightwalk/900/1100", aspect: "aspect-[4/5]" },
    { id: 11, title: "Duotone Edit", category: "editan", src: "https://picsum.photos/seed/duotone/1100/800", aspect: "aspect-[4/3]" },
    { id: 12, title: "Social Media Kit", category: "desain", src: "https://picsum.photos/seed/socmedkit/900/900", aspect: "aspect-square" },
];
