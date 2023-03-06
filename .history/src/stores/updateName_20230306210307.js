import create from "zustand";

const useStore = create((set) => ({
  Name: "",
  FirstName: "",
  updateName: (Name) => set(() => ({ Name: Name })),
  updateFirstName: (firstName) => set(() => ({ updatedFirstName: firstName })),
  removeFirstName: () => set(() => ({ firstName: "" })),
}));

export default useStore;
