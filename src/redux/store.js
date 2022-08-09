import { legacy_createStore as createStore ,combineReducers ,applyMiddleware} from "redux";
import { reducer } from "./auth/reducer";
import { todoreduser } from "./todo/reducer";
const rootreduser=combineReducers({
    auth:reducer,
    todo:todoreduser
})
import thunk from "redux-thunk";
export const store = createStore(reducer,applyMiddleware(thunk))
store.subscribe(()=>{
    console.log(store.getState())
})