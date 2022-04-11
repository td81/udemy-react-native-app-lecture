//storeはstateを保持する
import { createStore, combineReducers } from "redux";
import userReducer from  './reducers/user';
//デバッグ用のツール
import { composeWithDevTools } from 'redux-devtools-extension'

//storeは巨大なjsonツリーのようなもの。下記にツリー構造を定義する。
const rootReducer = combineReducers({
    user: userReducer
});

const store = createStore(rootReducer, composeWithDevTools);

export default store;