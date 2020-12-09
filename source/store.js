import create from "zustand";

export const [useStore, api] = create(set => ({
	view: "dashboard",
}));
