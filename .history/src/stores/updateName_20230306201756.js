import create from "zustand";

const useStore = create((set) => ({
  name: "",
  setName: () => set((state) => ({ name: state.name })),
}));
