//storeはstateを保持する
import { createStore, combineReducers } from "redux";
import userReducer from  './reducers/user';
//デバッグ用のツール
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

//storeは巨大なjsonツリーのようなもの。下記にツリー構造を定義する。
const rootReducer = combineReducers({
    user: userReducer
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist : ['user']
}

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer, composeWithDevTools);

export const persistor = persistStore(store);
export default store;