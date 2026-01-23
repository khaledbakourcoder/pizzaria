export const products = [
    // --- PIZZA ---
    {
        id: 'pizza-1',
        name: 'Pizza Margherita Classica',
        slug: 'margherita',
        description: 'Hausgemachte Tomatensauce, Fior di Latte Mozzarella, frischer Basilikum.',
        category: 'Pizza',
        imageUrl: '/category/pizza.png',
        imageAlt: 'Pizza Margherita',
        prices: { S: 9.50, M: 11.50, L: 14.50 }
    },
    // --- PASTA ---
    {
        id: 'pasta-1',
        name: 'Spaghetti Carbonara',
        slug: 'carbonara',
        description: 'Original mit Guanciale, Eigelb und Pecorino Romano.',
        category: 'Pasta',
        imageUrl: '/category/pasta.png',
        imageAlt: 'Spaghetti Carbonara',
        prices: { Normal: 13.90 }
    },
    // --- AUFLAUF ---
    {
        id: 'auflauf-1',
        name: 'Lasagne al Forno',
        slug: 'lasagne',
        description: 'Schichten aus hausgemachter Bolognese und Béchamelsauce.',
        category: 'Auflauf',
        imageUrl: '/category/auflauf.png',
        imageAlt: 'Hausgemachte Lasagne',
        prices: { Normal: 14.50 }
    },
    // --- VEGETARISCH ---
    {
        id: 'veggie-1',
        name: 'Pizza Veggie Dream',
        slug: 'veggie-dream',
        description: 'Frische Paprika, Zucchini, Auberginen und Oliven.',
        category: 'Vegetarisch',
        imageUrl: '/category/vegetarisch.png',
        imageAlt: 'Vegetarische Pizza',
        prices: { S: 11.50, M: 13.50, L: 16.50 }
    },
    // --- SOFTDRINKS ---
    {
        id: 'soft-1',
        name: 'Coca Cola',
        slug: 'cola',
        description: 'Klassisches Erfrischungsgetränk (0.33l Glasflasche).',
        category: 'Softdrinks',
        imageUrl: '/category/cola.png',
        imageAlt: 'Coca Cola',
        prices: { '0.33l': 3.20 },
        isBestSeller: true,
    },
    // --- SMOOTHIES ---
    {
        id: 'smoothie-1',
        name: 'Beeren Mix Smoothie',
        slug: 'beeren-smoothie',
        description: 'Frisch gemixte Waldbeeren mit einem Spritzer Zitrone.',
        category: 'Smoothies',
        imageUrl: '/category/smothis.png',
        imageAlt: 'Fruchtiger Smoothie',
        prices: { '0.4l': 5.90 },
        isBestSeller: true
    }
];