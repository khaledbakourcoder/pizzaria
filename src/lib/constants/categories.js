export const categories = [
    {
        name: 'Pizza',
        image: '/category/pizza.png',
        slug: 'pizza',
        doughs: [
            { name: 'Klassik (Weizen)', price: 0.00 },
            { name: 'Vollkorn', price: 1.50 },
            { name: 'Dinkel', price: 1.50 },
        ],
        toppings: [
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
        ]
    },
    {
        name: 'Pasta',
        image: '/category/pasta.png',
        slug: 'pasta',
        toppings: [
            { name: 'Extra Käse / Parmesan', price: 1.00 },
            { name: 'Extra Sauce', price: 0.50 },
            { name: 'Hähnchen', price: 2.00 },
            { name: 'Meeresfrüchte', price: 2.50 },
        ]
    },
    {
        name: 'Smoothies',
        image: '/category/smothis.png',
        slug: 'smoothies',
        toppings: [
            { name: 'Proteinpulver', price: 1.50 },
            { name: 'Chiasamen', price: 1.00 },
            { name: 'Haferflocken', price: 1.00 },
            { name: 'Mandelmilch / Sojamilch', price: 0.50 },
            { name: 'Honig', price: 0.50 },
        ]
    },
    {
        name: 'Kalte Getränke',
        image: '/category/cola.png',
        slug: 'softdrinks',
        toppings: [] // Keine Extras
    },
];