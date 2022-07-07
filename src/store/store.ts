import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import modalReducer from './modules/modal/modal.slice';
import searchReducer from './modules/search/search.slice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    search: searchReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
