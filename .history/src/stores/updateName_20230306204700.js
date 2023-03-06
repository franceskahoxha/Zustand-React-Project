import create from "zustand";

const useStore = create((set) => ({
  firstName: "",
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  removeFirstName: (firstName) =>
    set((state) => ({ firstName: state.firstName })),
}));

export default useStore;
