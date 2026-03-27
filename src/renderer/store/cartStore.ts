import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

export interface CartAddon {
  addonId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartItem {
  id: string; 
  productId: string;
  name: string;
  basePrice: number;
  quantity: number;
  addons: CartAddon[];
  totalPrice: number; 
}

interface CartState {
  items: CartItem[];
  cartTotal: number;
  
  addItem: (item: Omit<CartItem, 'id' | 'totalPrice'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  cartTotal: 0,

  addItem: (item) => set((state) => {
    const addonsTotal = item.addons.reduce((sum, addon) => sum + (addon.price * addon.quantity), 0);
    const unitPrice = item.basePrice + addonsTotal;
    const totalPrice = unitPrice * item.quantity;

    const newItem: CartItem = {
      ...item,
      id: uuidv4(),
      totalPrice
    };

    const newItems = [...state.items, newItem];
    const newCartTotal = newItems.reduce((sum, current) => sum + current.totalPrice, 0);

    return { items: newItems, cartTotal: newCartTotal };
  }),

  removeItem: (id) => set((state) => {
    const newItems = state.items.filter(item => item.id !== id);
    const newCartTotal = newItems.reduce((sum, current) => sum + current.totalPrice, 0);
    return { items: newItems, cartTotal: newCartTotal };
  }),

  updateQuantity: (id, quantity) => set((state) => {
    if (quantity <= 0) return state; 
    
    const newItems = state.items.map(item => {
      if (item.id === id) {
        const addonsTotal = item.addons.reduce((sum, addon) => sum + (addon.price * addon.quantity), 0);
        const unitPrice = item.basePrice + addonsTotal;
        return { ...item, quantity, totalPrice: unitPrice * quantity };
      }
      return item;
    });

    const newCartTotal = newItems.reduce((sum, current) => sum + current.totalPrice, 0);
    return { items: newItems, cartTotal: newCartTotal };
  }),

  clearCart: () => set({ items: [], cartTotal: 0 }),
}));
