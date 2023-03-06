import create from "zustand";

type State = {
  firstName: string
  lastName: string
}

type Action = {
  updateFirstName: (firstName: State['firstName']) => void
  updateLastName: (lastName: State['lastName']) => void
}
const useStore = create((set) => ({
  name: "",
  setName: () => set((state) => ({ name: state.name })),
}));

export default useStore;
