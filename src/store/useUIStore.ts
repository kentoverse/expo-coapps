import { create } from "zustand";

interface UIState {
    iconPreview: string | null;
    setIconPreview: (id: string | null) => void;

    searchTerm: string;
    setSearchTerm: (v: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
    iconPreview: null,
    setIconPreview: (id) => set({ iconPreview: id }),

    searchTerm: "",
    setSearchTerm: (v) => set({ searchTerm: v }),
}));





