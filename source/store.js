import create from "zustand";

export const [useStore, api] = create((set, store) => ({
  view: "dashboard",

  scene: null,

  setView(view) {
    set({ view });
  },

  setEditScene(scene) {
    set({ scene });
  },
}));
