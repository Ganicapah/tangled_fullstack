import { create } from "zustand";
interface useHooksModalDialog {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useHooks = create<useHooksModalDialog>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useHooks;
