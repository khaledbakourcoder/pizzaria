"use client";

import { CartProvider } from "@/lib/context/CartContext";
import CartDrawer from "./layout/CartDrawer";

export function Providers({ children, settings }: { children: React.ReactNode, settings: any }) {
    return (
        <CartProvider>
            {children}
            <CartDrawer settings={settings} />
        </CartProvider>
    );
}
