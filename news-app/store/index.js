//storeはstateを保持する
import { createStore, combineReducers } from "redux";
import userReducer from  './reducers/user';
//デバッグ用のツール
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer, persistStore } from 'redux-persist';
import { AsyncStorageStatic } from 'react-native';

//storeは巨大なjsonツリーのようなもの。下記にツリー構造を定義する。
const rootReducer = combineReducers({
    user: userReducer
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorageStatic,
    whitelist : ['user']
}

const persistReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistReducer, composeWithDevTools);

export const persistor = persistStore(store);
export default store;