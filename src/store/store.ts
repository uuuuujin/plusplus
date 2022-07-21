import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import modalReducer from './modules/modal/modal.slice';
import searchReducer from './modules/search/search.slice';
import sliderReducer from './modules/slider/slider.slice';
import calendarReducer from './modules/calendar/calendar.slice';
import navigatorReducer from './modules/navigator/navigator.slice';
import userReducer from './modules/user//user.slice';
import userlistReducer from './modules/userlist/userlist.slice';
import stayReducer from './modules/stay/stay.slice';
import eventReducer from './modules/event/event.slice';
import popularStayReducer from './modules/popular-stay/popularStay.slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  modal: modalReducer,
  search: searchReducer,
  slider: sliderReducer,
  calendar: calendarReducer,
  navigator: navigatorReducer,
  user: userReducer,
  userlist: userlistReducer,
  stay: stayReducer,
  event: eventReducer,
  popularStay: popularStayReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
