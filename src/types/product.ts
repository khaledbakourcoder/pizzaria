export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    category: 'Auflauf' | 'Pasta' | 'Vegetarisch' | 'Pizza' | 'Getränke' | 'Softdrinks';
    imageUrl: string;
    imageAlt: string;
    // Das hier erlaubt flexible Größen-Namen:
    prices: Record<string, number>;
}