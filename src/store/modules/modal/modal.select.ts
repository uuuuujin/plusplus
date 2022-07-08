import { createSelector } from 'reselect';

import { RootState } from '../../store';

export const selectModalReducer = (state: RootState) => state.modal;

export const selectIsDestinationModalOpen = createSelector(
  [selectModalReducer],
  (modal) => modal.isDestinationModalOpen
);

export const selectIsFilterModalOpen = createSelector([selectModalReducer], (modal) => modal.isFilterModalOpen)