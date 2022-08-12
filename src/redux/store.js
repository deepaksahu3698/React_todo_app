import { legacy_createStore as createStore ,combineReducers ,applyMiddleware} from "redux";
import { reducer } from "./auth/reducer";
import { todoreduser } from "./todo/reducer";
import thunk from "redux-thunk";
const rootreduser=combineReducers({
    auth:reducer,
    todo:todoreduser
})

export const store = createStore(rootreduser,applyMiddleware(thunk))
store.subscribe(()=>{
    console.log(store.getState())
})