import create from "zustand";

const useStore = create((set) => ({
  firstName: "",
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  removeFirstName: (secondName) => set(() => ({ firstName: secondName })),
}));

export default useStore;
