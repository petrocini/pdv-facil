import { create } from 'zustand';

interface EventState {
  activeEvent: Event | null;
  loadActiveEvent: () => Promise<void>;
  clearActiveEvent: () => void;
}

export const useEventStore = create<EventState>((set) => ({
  activeEvent: null,
  
  loadActiveEvent: async () => {
    try {
      const response = await window.api.events.getActive();
      if (response.success) {
        set({ activeEvent: response.data || null });
      } else {
        console.error('Error loading active event:', response.error);
        set({ activeEvent: null });
      }
    } catch (error) {
      console.error('Failed to load active event:', error);
      set({ activeEvent: null });
    }
  },

  clearActiveEvent: () => set({ activeEvent: null })
}));
