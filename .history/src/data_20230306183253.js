import createStore from "zustand";

const useStore = createStore((set) => ({
  people: ["John Doe", "Jane Doe"],
  addPerson: (person) =>
    set((state) => ({ people: [...state.people, person] })),
}));

export default useStore;
