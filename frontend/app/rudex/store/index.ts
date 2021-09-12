import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
const allMiddleware = [thunk];
import allroot from "../reducers";
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(
  {
    ...persistConfig,
    transforms: [
      encryptTransform({
        secretKey: "koche123",
        onError: (err) => {
          console.log(err);
        },
      }),
    ],
  },
  allroot
);
export default () => {
  let store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...allMiddleware))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
