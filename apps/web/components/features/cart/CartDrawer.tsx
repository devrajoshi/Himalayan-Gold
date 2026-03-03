"use client";

import { useCart } from "@/store/useCart";
import { useStore } from "@/hooks/useStore";
import { Plus, Minus, Trash2, ShoppingBag, ShieldCheck, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetFooter
} from "@/components/ui/sheet"; // I'll use Sheet for a side drawer

export function CartDrawer() {
    const cart = useStore(useCart, (state) => state);

    if (!cart) return null;

    const { items, isOpen, closeCart, updateQuantity, removeItem } = cart;

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <Sheet open={isOpen} onOpenChange={closeCart}>
            <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
                <SheetHeader className="px-8 py-6 border-b border-primary/10 flex flex-row items-center justify-between">
                    <SheetTitle className="font-display text-2xl font-bold text-forest">
                        Your Honey Selection
                    </SheetTitle>
                </SheetHeader>

                <ScrollArea className="flex-1 px-8 py-6">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center opacity-40 py-20">
                            <ShoppingBag size={64} className="mb-4" />
                            <p className="text-lg font-medium">Your cart is empty</p>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="w-24 h-24 bg-forest/5 rounded-xl overflow-hidden flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-display font-bold text-lg text-forest">{item.name}</h3>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                        <p className="text-primary font-bold mb-3">\${item.price.toFixed(2)}</p>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center border border-primary/20 rounded-lg">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="px-2 py-1 text-forest hover:bg-forest/5 transition-colors"
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className="px-3 text-sm font-semibold">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="px-2 py-1 text-forest hover:bg-forest/5 transition-colors"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <Separator className="bg-primary/10" />

                            <div className="pt-4">
                                <h4 className="font-bold text-sm text-forest uppercase tracking-widest mb-4">Complete your experience</h4>
                                <div className="space-y-4">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="w-5 h-5 rounded border-primary text-primary focus:ring-primary/20 cursor-pointer" />
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium text-gray-700 group-hover:text-forest transition-colors">Add a handcrafted honey dipper</span>
                                            <span className="text-sm text-primary font-bold">+\$12.00</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}
                </ScrollArea>

                <SheetFooter className="px-8 py-8 bg-white border-t border-primary/10 block">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600 font-medium">Subtotal</span>
                        <span className="text-2xl font-bold text-forest">\${subtotal.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-gray-500 italic mb-6">Free Express Shipping from the Himalayas applied.</p>
                    <Button className="w-full bg-forest text-primary font-bold py-8 rounded-xl flex items-center justify-center gap-2 hover:bg-forest/95 transition-all shadow-lg hover:shadow-xl text-lg mb-6">
                        Secure Checkout
                    </Button>
                    <div className="flex justify-center items-center gap-6 opacity-60">
                        <div className="flex items-center gap-1">
                            <ShieldCheck size={14} className="text-forest" />
                            <span className="text-[10px] uppercase font-bold tracking-tighter">Secure SSL</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Leaf size={14} className="text-forest" />
                            <span className="text-[10px] uppercase font-bold tracking-tighter">Ethically Sourced</span>
                        </div>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
