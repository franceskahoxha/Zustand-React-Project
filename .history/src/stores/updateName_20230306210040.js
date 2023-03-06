import create from "zustand";

const useStore = create((set) => ({
  Name: "",
  updatedFirstName: "",
  updateName: (firstName) => set(() => ({ firstName: firstName })),
  updateFirstName: (firstName) => set(() => ({ updatedFirstName: firstName })),
  removeFirstName: () => set(() => ({ firstName: "" })),
}));

export default useStore;
