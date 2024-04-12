import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; // Import composeWithDevTools
import signinReducer from "./signinReducer";
import premiumSubscriptionReducer from "./premiumSubscriptionReducer";
const rootReducer = (state, action) => {
  if (action.type === "reset_store") {
    return joinedReducer(undefined, action);
  }
  return joinedReducer(state, action);
};
const joinedReducer = combineReducers({
  signinDetails: signinReducer,
  isPremiumUser: premiumSubscriptionReducer,
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
