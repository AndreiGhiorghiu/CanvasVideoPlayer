import create from "zustand";

export const [useStore, api] = create((set, store) => ({
	currentHover: null,
	placeholderPosition: true,
}));
