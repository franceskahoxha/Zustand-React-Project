import create from "zustand";

const useStore = create((set) => ({
  Name: "",
  FirstName: "",
  updateName: (name) => set(() => ({ name: name })),
  updateFirstName: (firstName) => set(() => ({ updatedFirstName: firstName })),
  removeFirstName: () => set(() => ({ firstName: "" })),
}));

export default useStore;
