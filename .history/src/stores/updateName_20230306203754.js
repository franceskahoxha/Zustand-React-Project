import create from "zustand";

const useStore = create((set) => ({
  firstName: "",
  lastName: "",
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  emoveFirstName: (firstName) => set(() => ({ firstName: firstName })),
}));

export default useStore;
