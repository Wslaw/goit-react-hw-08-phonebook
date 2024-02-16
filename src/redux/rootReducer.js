import { combineReducers } from "@reduxjs/toolkit";

import authReducer from './auth/auth-slice';
import filterReducer from "./filter/filter-slice";
import contactsReducer from "./contacts/contacts-slice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'token',
    storage,
    whitelist: ['token'],
    
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});


// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default persistedReducer;
export default rootReducer;