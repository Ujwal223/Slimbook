import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AppSettings } from '../types';
import { DEFAULT_SETTINGS } from '../types';

interface AppStore {
  settings: AppSettings;
  currentUrl: string;
  messengerUrl: string;
  updateSettings: (settings: Partial<AppSettings>) => void;
  updateCurrentUrl: (url: string) => void;
  updateMessengerUrl: (url: string) => void;
  resetSettings: () => void;
}

export const useStore = create<AppStore>()(
  persist(
    (set) => ({
      settings: DEFAULT_SETTINGS,
      currentUrl: '',
      messengerUrl: '',
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
      updateCurrentUrl: (url) => set({ currentUrl: url }),
      updateMessengerUrl: (url) => set({ messengerUrl: url }),
      resetSettings: () => set({ settings: DEFAULT_SETTINGS }),
    }),
    {
      name: 'slimsocial-storage',
    }
  )
);
