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
        name: 'Kalte Getränke',
        image: '/category/cola.png',
        slug: 'softdrinks',
        toppings: [] // Keine Extras
    },
];