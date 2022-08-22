import { legacy_createStore as createStore ,combineReducers ,applyMiddleware,compose} from "redux";
import { reducer } from "./auth/reducer";
import { todoreduser } from "./todo/reducer";
import thunk from "redux-thunk";
const middlewares=[thunk]
const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
  );
const rootreduser=combineReducers({
    auth:reducer,
    todo:todoreduser
})

export const store = createStore(rootreduser,enhancer)
store.subscribe(()=>{
    console.log(store.getState())
})