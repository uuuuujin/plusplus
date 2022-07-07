import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
  isDestinationModalOpen: boolean;
}

const initialState: ModalState = {
  isDestinationModalOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    radioDestinationModal: (state) => {
      state.isDestinationModalOpen = !state.isDestinationModalOpen;
    },
  },
});

export const modalAction = modalSlice.actions;
export default modalSlice.reducer;
