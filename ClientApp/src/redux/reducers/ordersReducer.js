import { actionType } from "../actions/ordersAction";
import { applyOnFetch, applyError, applyUpdate } from "./apply";

const initialState = {
  orders: [],
  isFetch: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.ORDERS_ON_FETCH:
      return applyOnFetch(state, action);
    case actionType.ORDERS_ON_UPDATE:
      return applyUpdate("orders", state, action);
    case actionType.ORDERS_ON_ERROR:
      return applyError(state, action);
    default:
      return state;
  }
};
