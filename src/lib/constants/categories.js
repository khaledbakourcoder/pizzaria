export const categories = [
  {
    name: "Pizza",
    image: "/category/pizza.webp",
    slug: "pizza",
    doughs: [
      { name: "Klassik (Weizen)", price: 0.0 },
      { name: "Vollkorn", price: 1.5 },
      { name: "Dinkel", price: 1.5 },
    ],
    toppings: [
      { name: "Extra Käse", price: 2.5 },
      { name: "Salami", price: 2.5 },
      { name: "Schinken", price: 2.5 },
      { name: "Hähnchen", price: 3.0 },
      { name: "Champignons", price: 2.5 },
      { name: "Oliven", price: 2.5 },
      { name: "Paprika", price: 2.5 },
      { name: "Jalapeños", price: 2.5 },
      { name: "Ananas", price: 2.5 },
      { name: "Rucola", price: 3.0 },
      { name: "Thunfisch", price: 3.0 },
    ],
  },
  {
    name: "Kalte Getränke",
    image: "/category/cola.webp",
    slug: "softdrinks",
    toppings: [], // Keine Extras
  },
];
