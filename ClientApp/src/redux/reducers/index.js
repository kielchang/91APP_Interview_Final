import { combineReducers } from "redux";
import ordersReducer from "./ordersReducer";
import shippedOrdersReducer from "./shippedOrdersReducer";
import ordersFormReducer from "./ordersFormReducer";

export default combineReducers({
  ordersState: ordersReducer,
  shippedOrdersState: shippedOrdersReducer,
  ordersFormState: ordersFormReducer,
});
