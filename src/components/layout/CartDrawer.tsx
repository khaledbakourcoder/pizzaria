"use client";

import { useCart } from "@/lib/context/CartContext";

interface CartDrawerProps {
    settings?: any;
}

export default function CartDrawer({ settings }: CartDrawerProps) {
    const { items, isCartOpen, toggleCart, updateQuantity, cartTotal } = useCart();

    const minOrderValue = settings?.min_order_value || 15;
    const phone = settings?.phone || "+49 171 6003785";
    const phoneLink = `tel:${phone.replace(/\s+/g, "")}`;

    if (!isCartOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[200] transition-opacity duration-500"
                onClick={toggleCart}
            />

            {/* Drawer */}
            <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#0b1218] border-l border-white/10 z-[210] shadow-2xl flex flex-col transform transition-transform duration-500">

                {/* Header */}
                <div className="px-8 py-6 border-b border-white/5 flex justify-between items-center">
                    <h2 className="text-3xl font-serif italic text-white flex items-center gap-3">
                        Warenkorb
                        {items.length > 0 && (
                            <span className="bg-primary text-black text-xs font-sans font-bold not-italic px-2 py-1 rounded-full">
                                {items.reduce((acc, i) => acc + i.quantity, 0)}
                            </span>
                        )}
                    </h2>
                    <button
                        onClick={toggleCart}
                        className="text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold"
                    >
                        Schließen ✕
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center opacity-50 space-y-4">
                            <span className="text-6xl mb-4">🍕</span>
                            <p className="font-serif italic text-xl text-white">Dein Warenkorb ist leer.</p>
                            <p className="text-xs uppercase tracking-widest text-primary">Wähle eine Pizza aus der La Carta.</p>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className="relative bg-[#0f172a] rounded-2xl p-5 border border-white/5">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-white text-lg font-bold pr-16">{item.name} ({item.size})</h4>
                                    <p className="text-white font-serif absolute right-5 top-5">{(item.price * item.quantity).toFixed(2)} €</p>
                                </div>

                                <p className="text-xs text-gray-400 mb-4">
                                    Teig: {item.dough}
                                    {item.extras.length > 0 && <>, Extras: {item.extras.join(", ")}</>}
                                </p>

                                {/* Quantity Selector */}
                                <div className="inline-flex items-center rounded-full bg-black/40 border border-white/10 overflow-hidden">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                    >
                                        –
                                    </button>
                                    <span className="px-2 text-sm text-white min-w-[32px] text-center font-bold">
                                        {item.quantity}
                                    </span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer Summary */}
                {items.length > 0 && (
                    <div className="p-8 border-t border-primary/20 bg-[#0f172a]">
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-sm text-gray-400">
                                <span>Zwischensumme</span>
                                <span>{cartTotal.toFixed(2)} €</span>
                            </div>
                            <div className="flex justify-between text-sm text-primary">
                                <span>Lieferkosten</span>
                                <span>0,00 €</span>
                            </div>
                            <div className="flex justify-between text-2xl font-bold text-white pt-2 border-t border-white/10 mt-2">
                                <span>Gesamt</span>
                                <span>{cartTotal.toFixed(2)} €</span>
                            </div>
                        </div>

                        {/* Coming Soon Notice instead of Checkout Button */}
                        <div className="space-y-4">
                            <div className="p-4 bg-primary/10 border border-primary/20 rounded-2xl text-center">
                                <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                                    Online-Bestellung
                                </p>
                                <p className="text-white text-sm font-serif italic mb-3">
                                    Bald für dich verfügbar!
                                </p>
                                <div className="h-[1px] w-12 bg-primary/30 mx-auto mb-3" />
                                {cartTotal < minOrderValue ? (
                                    <p className="text-orange-400 text-[9px] uppercase tracking-widest leading-relaxed font-bold">
                                        Mindestbestellwert: {minOrderValue.toFixed(2)} € <br />
                                        Noch {(minOrderValue - cartTotal).toFixed(2)} € fehlen
                                    </p>
                                ) : (
                                    <p className="text-muted text-[9px] uppercase tracking-widest leading-relaxed">
                                        Aktuell nehmen wir Bestellungen <br />gerne telefonisch entgegen:
                                    </p>
                                )}
                            </div>

                            <a
                                href={phoneLink}
                                className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-black rounded-full shadow-lg hover:shadow-[0_0_20px_var(--color-primary)] transition-all font-black uppercase tracking-widest text-xs"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                Jetzt Anrufen
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
