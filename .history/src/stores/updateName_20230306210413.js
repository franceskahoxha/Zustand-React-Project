import create from "zustand";

const useStore = create((set) => ({
  name: "",
  firstName: "",
  updateName: (name) => set(() => ({ name: name })),
  updateFirstName: (name) => set(() => ({ updatedFirstName: name })),
  removeFirstName: () => set(() => ({ name: "" })),
}));

export default useStore;
