import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
  isDestinationModalOpen: boolean;
  isFilterModalOpen: boolean;
  isHeaderDestinationModalOpen: boolean;
  isUserInfoModalOpen: boolean;
  isCalendarModalOpen: boolean;
  isWishManageModalOpen: boolean;
}

const initialState: ModalState = {
  isDestinationModalOpen: false,
  isFilterModalOpen: false,
  isHeaderDestinationModalOpen: false,
  isUserInfoModalOpen: false,
  isCalendarModalOpen: false,
  isWishManageModalOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    radioDestinationModal: (state) => {
      state.isDestinationModalOpen = !state.isDestinationModalOpen;
    },
    radioFilterModal: (state) => {
      state.isFilterModalOpen = !state.isFilterModalOpen;
    },
    radioHeaderDestinationModal: (state) => {
      state.isHeaderDestinationModalOpen = !state.isHeaderDestinationModalOpen;
    },
    radioUserInfoModal: (state) => {
      state.isUserInfoModalOpen = !state.isUserInfoModalOpen;
    },
    setCalendarModal: (state) => {
      state.isCalendarModalOpen = !state.isCalendarModalOpen;
    },
    radioWishManageModal: (state) => {
      state.isWishManageModalOpen = !state.isWishManageModalOpen;
    },
  },
});

export const modalAction = modalSlice.actions;
export default modalSlice.reducer;
