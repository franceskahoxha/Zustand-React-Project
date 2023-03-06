import create from "zustand";

interface State {
  firstName: string;
  lastName: string;
}

interface Actions {
  updateFirstName: (firstName: string) => void;
  updateLastName: (lastName: string) => void;
}

const useStore = create<State, Actions>((set) => ({
  name: "",
  setName: (name) => set({ name }),
}));

export default useStore;
