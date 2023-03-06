import create from "zustand";

const State = {
  firstName: "",
  lastName: "",
};

const Action = {
  updateFirstName: (firstName) => {},
  updateLastName: (lastName) => {},
};

const useStore = create((set) => ({
  name: "",
  setName: () => set((state) => ({ name: state.name })),
}));

export default useStore;
