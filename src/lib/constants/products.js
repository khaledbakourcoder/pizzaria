// --- EXTRAS & ZUSÄTZE ---
const pizzaPath= "/products/pizza";
const softDrinkPath= "/products/kalte_getränke";
const pastaPath= "/products/pasta";
const smoothiePath= "/products/smoothie";
// Quelle: Alle Menükarten (Pizza, Pasta, Smoothies)
export const extras = {
    pizza: [
        { name: 'Extra Käse', price: 2.50 },
        { name: 'Salami', price: 2.50 },
        { name: 'Schinken', price: 2.50 },
        { name: 'Hähnchen', price: 3.00 },
        { name: 'Champignons', price: 2.50 },
        { name: 'Oliven', price: 2.50 },
        { name: 'Paprika', price: 2.50 },
        { name: 'Jalapeños', price: 2.50 },
        { name: 'Ananas', price: 2.50 },
        { name: 'Rucola', price: 3.00 },
        { name: 'Thunfisch', price: 3.00 },
    ],
    pasta: [
        { name: 'Extra Käse / Parmesan', price: 1.00 },
        { name: 'Extra Sauce', price: 0.50 },
        { name: 'Hähnchen', price: 2.00 },
        { name: 'Meeresfrüchte', price: 2.50 },
    ],
    smoothies: [
        { name: 'Proteinpulver', price: 1.50 },
        { name: 'Chiasamen', price: 1.00 },
        { name: 'Haferflocken', price: 1.00 },
        { name: 'Mandelmilch / Sojamilch', price: 0.50 },
        { name: 'Honig', price: 0.50 },
        { name: 'Ananas', price: 7.50 }, // Spezial-Zusatz laut Karte
    ]
};

export const products = [
    // --- PIZZA ---
    {
        id: 'pizza-1',
        name: 'Pizza Margherita',
        slug: 'margherita',
        description: 'Tomatensauce, Mozzarella',
        category: 'Pizza',
        imageUrl: `${pizzaPath}/margherita.png`,
        imageAlt: 'Pizza Margherita',
        prices: { S: 8.50, M: 10.50, L: 13.50 },
        isBestSeller: true
    },
    {
        id: 'pizza-2',
        name: 'Pizza Salami',
        slug: 'salami',
        description: 'Tomatensauce, Salami',
        category: 'Pizza',
        imageUrl: `${pizzaPath}/salami.png`,
        imageAlt: 'Pizza Salami',
        prices: { S: 9.50, M: 11.50, L: 14.50 },
        isBestSeller: true
    },
    {
        id: 'pizza-3',
        name: 'Pizza Prosciutto',
        slug: 'prosciutto',
        description: 'Tomatensauce, Schinken',
        category: 'Pizza',
        imageUrl: `${pizzaPath}/prosciutto.png`,
        imageAlt: 'Pizza Prosciutto',
        prices: { S: 9.50, M: 11.50, L: 14.50 },
        isBestSeller: false
    },
    {
        id: 'pizza-4',
        name: 'Pizza Funghi',
        slug: 'funghi',
        description: 'Tomatensauce, Champignons',
        category: 'Pizza',
        imageUrl: `${pizzaPath}/funghi.png`,
        imageAlt: 'Pizza Funghi',
        prices: { S: 9.00, M: 11.00, L: 14.00 },
        isBestSeller: false
    },
    {
        id: 'pizza-5',
        name: 'Pizza Hawaii',
        slug: 'hawaii',
        description: 'Schinken, Ananas',
        category: 'Pizza',
        imageUrl: `${pizzaPath}/hawaii.png`,
        imageAlt: 'Pizza Hawaii',
        prices: { S: 9.50, M: 11.50, L: 14.50 },
        isBestSeller: false
    },
    {
        id: 'pizza-6',
        name: 'Pizza Tonno & Zwiebeln',
        slug: 'tonno-zwiebeln',
        description: 'Thunfisch, Zwiebeln',
        category: 'Pizza',
        imageUrl: `${pizzaPath}/tonno-zwiebeln.png`,
        imageAlt: 'Pizza Tonno',
        prices: { S: 9.50, M: 11.50, L: 15.00 },
        isBestSeller: false
    },
    {
        id: 'pizza-9',
        name: 'Pizza BBQ Chicken',
        slug: 'bbq-chicken',
        description: 'BBQ-Sauce, Hähnchen, Zwiebeln',
        category: 'Pizza',
        imageUrl: `${pizzaPath}/bbq-chicken.png`,
        imageAlt: 'Pizza BBQ Chicken',
        prices: { S: 10.80, M: 12.80, L: 16.50 },
        isBestSeller: false
    },
    {
        id: 'pizza-10',
        name: 'Pizza Vegetarisch',
        slug: 'vegetarisch',
        description: 'Gemüse, Käse',
        category: 'Pizza',
        imageUrl: `${pizzaPath}/vegetarisch.png`,
        imageAlt: 'Pizza Vegetarisch',
        prices: { S: 10.80, M: 12.80, L: 16.50 },
        isBestSeller: false
    },
    {
        id: 'pizza-11',
        name: 'Pizza Quattro Formaggi',
        slug: 'quattro-formaggi',
        description: 'Vier Käsesorten',
        category: 'Pizza',
        imageUrl: `${pizzaPath}/quattro-formaggi.png`,
        imageAlt: 'Pizza Quattro Formaggi',
        prices: { S: 11.50, M: 13.50, L: 17.00 },
        isBestSeller: false
    },
    {
        id: 'pizza-12',
        name: 'Pizza Sucuk',
        slug: 'sucuk',
        description: 'Sucuk, Zwiebeln',
        category: 'Pizza',
        imageUrl: `${pizzaPath}/sucuk.png`,
        imageAlt: 'Pizza Sucuk',
        prices: { S: 10.80, M: 13.80, L: 16.50 },
        isBestSeller: false
    },
    {
        id: 'pizza-13',
        name: 'Pizza Polo',
        slug: 'polo',
        description: 'Hähnchen, Champignons',
        category: 'Pizza',
        imageUrl: `${pizzaPath}/polo.png`,
        imageAlt: 'Pizza Polo',
        prices: { S: 10.80, M: 12.80, L: 16.50 },
        isBestSeller: false
    },
    {
        id: 'pizza-14',
        name: 'Pizza Tonno Supreme',
        slug: 'tonno-supreme',
        description: 'Thunfisch, Oliven, Zwiebeln',
        category: 'Pizza',
        imageUrl: `${pizzaPath}/tonno-supreme.png`,
        imageAlt: 'Pizza Tonno Supreme',
        prices: { S: 11.00, M: 13.80, L: 17.00 },
        isBestSeller: false
    },

    // --- PASTA ---
    {
        id: 'pasta-1',
        name: 'Spaghetti Bolognese',
        slug: 'spaghetti-bolognese',
        description: 'Spaghetti, Hackfleisch, Tomatensauce, Zwiebeln, Knoblauch',
        category: 'Pasta',
        imageUrl: `${pastaPath}/spaghetti-bolognese.png`,
        imageAlt: 'Spaghetti Bolognese',
        prices: { Normal: 6.50 },
        isBestSeller: true
    },
    {
        id: 'pasta-2',
        name: 'Spaghetti Carbonara',
        slug: 'spaghetti-carbonara',
        description: 'Spaghetti, Speck, Ei, Parmesan, Sahne',
        category: 'Pasta',
        imageUrl: `${pastaPath}/spaghetti-carbonara.png`,
        imageAlt: 'Spaghetti Carbonara',
        prices: { Normal: 7.00 },
        isBestSeller: true
    },
    {
        id: 'pasta-3',
        name: 'Penne Arrabiata',
        slug: 'penne-arrabiata',
        description: 'Penne, Tomatensauce, Knoblauch, Chili, Petersilie',
        category: 'Pasta',
        imageUrl: `${pastaPath}/penne-arrabiata.png`,
        imageAlt: 'Penne Arrabiata',
        prices: { Normal: 6.50 },
        isBestSeller: false
    },
    {
        id: 'pasta-4',
        name: 'Penne al Pesto',
        slug: 'penne-pesto',
        description: 'Penne, Basilikumpesto, Pinienkerne, Parmesan',
        category: 'Pasta',
        imageUrl: `${pastaPath}/penne-pesto.png`,
        imageAlt: 'Penne al Pesto',
        prices: { Normal: 7.00 },
        isBestSeller: false
    },
    {
        id: 'pasta-5',
        name: 'Fettuccine Alfredo',
        slug: 'fettuccine-alfredo',
        description: 'Fettuccine, Sahnesauce, Parmesan, Butter',
        category: 'Pasta',
        imageUrl: `${pastaPath}/fettuccine-alfredo.png`,
        imageAlt: 'Fettuccine Alfredo',
        prices: { Normal: 7.00 },
        isBestSeller: false
    },
    {
        id: 'pasta-6',
        name: 'Lasagne al Forno',
        slug: 'lasagne',
        description: 'Lasagneblätter, Hackfleisch, Bechamelsauce',
        category: 'Pasta',
        imageUrl: `${pastaPath}/lasagne.png`,
        imageAlt: 'Lasagne al Forno',
        prices: { Normal: 7.50 },
        isBestSeller: false
    },
    {
        id: 'pasta-7',
        name: 'Tagliatelle Funghi',
        slug: 'tagliatelle-funghi',
        description: 'Tagliatelle, Champignons, Sahnesauce, Knoblauch',
        category: 'Pasta',
        imageUrl: `${pastaPath}/tagliatelle-funghi.png`,
        imageAlt: 'Tagliatelle Funghi',
        prices: { Normal: 7.00 },
        isBestSeller: false
    },
    {
        id: 'pasta-8',
        name: 'Tortellini Prosciutto',
        slug: 'tortellini-prosciutto',
        description: 'Tortellini gefüllt mit Schinken, Sahnesauce, Parmesan',
        category: 'Pasta',
        imageUrl: `${pastaPath}/tortellini-prosciutto.png`,
        imageAlt: 'Tortellini Prosciutto',
        prices: { Normal: 7.50 },
        isBestSeller: false
    },
    {
        id: 'pasta-9',
        name: 'Spaghetti Frutti di Mare',
        slug: 'spaghetti-frutti-di-mare',
        description: 'Spaghetti, Meeresfrüchte, Knoblauch, Tomatensauce, Petersilie',
        category: 'Pasta',
        imageUrl: `${pastaPath}/spaghetti-frutti-di-mare.png`,
        imageAlt: 'Spaghetti Frutti di Mare',
        prices: { Normal: 8.00 },
        isBestSeller: false
    },

    // --- SMOOTHIES ---
    {
        id: 'smoothie-1',
        name: 'Mango Delight',
        slug: 'mango-delight',
        description: 'Mango, Banane, Orangensaft',
        category: 'Smoothies',
        imageUrl: `${smoothiePath}/mango-delight.png`,
        imageAlt: 'Mango Delight',
        prices: { Klein: 5.00, Groß: 7.00 },
        isBestSeller: true
    },
    {
        id: 'smoothie-2',
        name: 'Berry Blast',
        slug: 'berry-blast',
        description: 'Erdbeeren, Himbeeren, Blaubeeren, Apfelsaft',
        category: 'Smoothies',
        imageUrl: `${smoothiePath}/berry-blast.png`,
        imageAlt: 'Berry Blast',
        prices: { Klein: 5.30, Groß: 7.30 },
        isBestSeller: false
    },
    {
        id: 'smoothie-3',
        name: 'Tropical Twist',
        slug: 'tropical-twist',
        description: 'Ananas, Mango, Kokoswasser',
        category: 'Smoothies',
        imageUrl: `${smoothiePath}/tropical-twist.png`,
        imageAlt: 'Tropical Twist',
        prices: { Klein: 5.30, Groß: 7.30 },
        isBestSeller: false
    },
    {
        id: 'smoothie-4',
        name: 'Green Power',
        slug: 'green-power',
        description: 'Spinat, Grünkohl, Apfel, Banane',
        category: 'Smoothies',
        imageUrl: `${smoothiePath}/green-power.png`,
        imageAlt: 'Green Power',
        prices: { Klein: 5.00, Groß: 7.00 },
        isBestSeller: false
    },
    {
        id: 'smoothie-5',
        name: 'Strawberry Banana',
        slug: 'strawberry-banana',
        description: 'Erdbeeren, Banane, Joghurt',
        category: 'Smoothies',
        imageUrl: `${smoothiePath}/strawberry-banana.png`,
        imageAlt: 'Strawberry Banana',
        prices: { Klein: 5.00, Groß: 7.00 },
        isBestSeller: false
    },
    {
        id: 'smoothie-7',
        name: 'Chocolate Banana',
        slug: 'chocolate-banana',
        description: 'Banane, Kakao, Milch',
        category: 'Smoothies',
        imageUrl: `${smoothiePath}/chocolate-banana.png`,
        imageAlt: 'Chocolate Banana',
        prices: { Klein: 5.30, Groß: 7.30 },
        isBestSeller: false
    },
    {
        id: 'smoothie-8',
        name: 'Citrus Boost',
        slug: 'citrus-boost',
        description: 'Orange, Zitrone, Ingwer',
        category: 'Smoothies',
        imageUrl: `${smoothiePath}/citrus-boost.png`,
        imageAlt: 'Citrus Boost',
        prices: { Klein: 5.00, Groß: 7.00 },
        isBestSeller: false
    },
    {
        id: 'smoothie-9',
        name: 'Avocado Smoothie',
        slug: 'avocado-smoothie',
        description: 'Avocado, Banane, Milch, Honig',
        category: 'Smoothies',
        imageUrl: `${smoothiePath}/avocado-smoothie.png`,
        imageAlt: 'Avocado Smoothie',
        prices: { Klein: 5.50, Groß: 7.50 },
        isBestSeller: false
    },
    {
        id: 'smoothie-10',
        name: 'Raspberry Dream',
        slug: 'raspberry-dream',
        description: 'Himbeeren, Erdbeeren, Joghurt',
        category: 'Smoothies',
        imageUrl: `${smoothiePath}/raspberry-dream.png`,
        imageAlt: 'Raspberry Dream',
        prices: { Klein: 5.50, Groß: 7.30 },
        isBestSeller: false
    },
    {
        id: 'smoothie-11',
        name: 'Kiwi Kick',
        slug: 'kiwi-kick',
        description: 'Kiwi, Apfel, Spinat, Limette',
        category: 'Smoothies',
        imageUrl: `${smoothiePath}/kiwi-kick.png`,
        imageAlt: 'Kiwi Kick',
        prices: { Klein: 5.00, Groß: 7.00 },
        isBestSeller: false
    },

    // --- KALTE GETRÄNKE ---
    {
        id: 'soft-1',
        name: 'Coca-Cola',
        slug: 'coca-cola',
        description: 'Klassisch',
        category: 'Kalte Getränke',
        imageUrl: `${softDrinkPath}/cola.png`,
        imageAlt: 'Coca-Cola',
        prices: { 'Dose': 2.50 },
        isBestSeller: true
    },
    {
        id: 'soft-2',
        name: 'Coca-Cola Light',
        slug: 'coca-cola-light',
        description: 'Zuckerfrei',
        category: 'Kalte Getränke',
        imageUrl: `${softDrinkPath}/cola_light.png`,
        imageAlt: 'Coca-Cola Light',
        prices: { 'Dose': 2.50 },
        isBestSeller: false
    },
    {
        id: 'soft-3',
        name: 'Coca-Cola Zero',
        slug: 'coca-cola-zero',
        description: 'Zuckerfrei, Zero Kalorien',
        category: 'Kalte Getränke',
        imageUrl: `${softDrinkPath}/cola_zero.png`,
        imageAlt: 'Coca-Cola Zero',
        prices: { 'Dose': 2.50 },
        isBestSeller: false
    },
    {
        id: 'soft-4',
        name: 'Fanta Orange',
        slug: 'fanta',
        description: 'Orangen-Geschmack',
        category: 'Kalte Getränke',
        imageUrl: `${softDrinkPath}/fanta_orange.png`,
        imageAlt: 'Fanta',
        prices: { 'Dose': 2.50 },
        isBestSeller: false
    },
    {
        id: 'soft-5',
        name: 'Sprite',
        slug: 'sprite',
        description: 'Zitronen-Limetten-Geschmack',
        category: 'Kalte Getränke',
        imageUrl: `${softDrinkPath}/sprite.png`,
        imageAlt: 'Sprite',
        prices: { 'Dose': 2.50 },
        isBestSeller: false
    },
    {
        id: 'soft-6',
        name: 'Red Bull',
        slug: 'red-bull',
        description: 'Zitronen-Limetten-Geschmack',
        category: 'Kalte Getränke',
        imageUrl: `${softDrinkPath}/rb_zitronen.png`,
        imageAlt: 'Red Bull',
        prices: { 'Dose': 3.00 },
        isBestSeller: false
    },
    {
        id: 'soft-7',
        name: 'Red Bull Energy',
        slug: 'red-bull-energy',
        description: 'Energy Drink',
        category: 'Kalte Getränke',
        imageUrl: `${softDrinkPath}/rb.png`,
        imageAlt: 'Red Bull Energy',
        prices: { 'Dose': 3.00 },
        isBestSeller: false
    },
    {
        id: 'soft-8',
        name: 'Red Bull Sugarfree',
        slug: 'red-bull-sugarfree',
        description: 'Zuckerfreie Variante',
        category: 'Kalte Getränke',
        imageUrl: `${softDrinkPath}/rb_sugerfree.png`,
        imageAlt: 'Red Bull Sugarfree',
        prices: { 'Dose': 3.00 },
        isBestSeller: false
    },
    {
        id: 'soft-9',
        name: 'Mineralwasser Sprudel',
        slug: 'wasser-sprudel',
        description: 'Mit Kohlensäure',
        category: 'Kalte Getränke',
        imageUrl: `${softDrinkPath}/wasser_sprudel.png`,
        imageAlt: 'Mineralwasser Sprudel',
        prices: { 'Flasche': 2.00 },
        isBestSeller: false
    },
    {
        id: 'soft-10',
        name: 'Mineralwasser Still',
        slug: 'wasser-still',
        description: 'Ohne Kohlensäure',
        category: 'Kalte Getränke',
        imageUrl: `${softDrinkPath}/wasser_still.png`,
        imageAlt: 'Mineralwasser Still',
        prices: { 'Flasche': 2.00 },
        isBestSeller: false
    }
];