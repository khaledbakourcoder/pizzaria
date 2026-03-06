"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type CartItem = {
    id: string; // unique ID for the specific configuration
    name: string;
    size: string;
    dough: string;
    extras: string[];
    price: number;
    quantity: number;
};

type CartContextType = {
    items: CartItem[];
    isCartOpen: boolean;
    addToCart: (item: Omit<CartItem, "id" | "quantity">) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, newQuantity: number) => void;
    toggleCart: () => void;
    cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (newItem: Omit<CartItem, "id" | "quantity">) => {
        setItems((prev) => {
            // Create a unique ID based on properties to group identical configurations
            const configId = `${newItem.name}-${newItem.size}-${newItem.dough}-${newItem.extras.sort().join(",")}`;

            const existingItem = prev.find((item) => item.id === configId);

            if (existingItem) {
                return prev.map((item) =>
                    item.id === configId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prev, { ...newItem, id: configId, quantity: 1 }];
        });

        // Auto-open cart when adding items
        setIsCartOpen(true);
    };

    const removeFromCart = (id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            removeFromCart(id);
            return;
        }
        setItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const toggleCart = () => setIsCartOpen((prev) => !prev);

    const cartTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                isCartOpen,
                addToCart,
                removeFromCart,
                updateQuantity,
                toggleCart,
                cartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
