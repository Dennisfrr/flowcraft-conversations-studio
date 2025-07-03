
import { create } from 'zustand';

interface FlowStore {
  showPreview: boolean;
  setShowPreview: (show: boolean) => void;
  flowData: any;
  setFlowData: (data: any) => void;
}

export const useFlowStore = create<FlowStore>((set) => ({
  showPreview: false,
  setShowPreview: (show) => set({ showPreview: show }),
  flowData: null,
  setFlowData: (data) => set({ flowData: data }),
}));
