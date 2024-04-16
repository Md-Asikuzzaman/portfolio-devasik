import { create } from "zustand";

type MenuStore = {
  menuActive: boolean;
  setMenuActive: (value?: boolean) => void;
};

export const useMenuActive = create<MenuStore>()((set) => ({
  menuActive: false,
  setMenuActive: (value?: boolean) =>
    set((state) => ({
      menuActive: value ? value : !state.menuActive,
    })),
}));

type BgStore = {
  showBackground: boolean;
  setShowBackground: (background: boolean) => void;
};

export const useShowBackground = create<BgStore>()((set) => ({
  showBackground: false,
  setShowBackground: (background: boolean) =>
    set((state) => ({
      showBackground: background,
    })),
}));

type SectionStore = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

export const useActiveSection = create<SectionStore>()((set) => ({
  activeSection: "home",
  setActiveSection: (section: string) =>
    set((state) => ({
      activeSection: section,
    })),
}));
