import { create } from 'zustand';

interface State {
  isStart: boolean;
}

interface Actions {
  toggleStart: () => void;
}

const initialState: State = {
  isStart: false,
};

export const useStore = create<State & Actions>((set) => ({
  ...initialState,
  toggleStart: () => set((state) => ({ ...state, isStart: !state.isStart })),
}));
