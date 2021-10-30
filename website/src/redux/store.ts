import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension"
import localforage from "localforage";
import thunk from 'redux-thunk'
localforage.config({
  driver: localforage.INDEXEDDB,
  description: 'redux',
  name: 'redux'
})
const persistConfig = {
  key: "redux",
  storage: localforage,
};
const AM = [thunk]
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...AM))
);

export const persistor = persistStore(store);

export default store;

