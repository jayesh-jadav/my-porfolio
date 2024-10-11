import { createStore, applyMiddleware } from "redux";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "../Reducer/rootReducer";
import { thunk } from "redux-thunk";

/**
 * Redux Setting
 */
const persistConfig = {
  key: "root",
  storage: storage,
  timeout: 100000,
  stateReconciler: autoMergeLevel2,
};

let middleware = [thunk];
middleware = [...middleware];

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export { store, persistor };
