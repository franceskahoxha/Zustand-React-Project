import create from "zustand";

const useStore = create((set) => ({
  firstName: "",
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  removeFirstName: () => set(() => ({ firstName: "" })),
}));

export default useStore;
