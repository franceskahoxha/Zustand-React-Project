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
  firstName: "",
  lastName: "",
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}));

export default useStore;
