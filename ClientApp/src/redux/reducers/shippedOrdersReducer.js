import { actionType } from "../actions/shippedOrdersAction";
import { applyOnFetch, applyError, applyUpdate } from "./apply";

const initialState = {
  shippedOrders: [],
  isFetch: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.SHIPPEDORDERS_ON_FETCH:
      return applyOnFetch(state, action);
    case actionType.SHIPPEDORDERS_ON_UPDATE:
      return applyUpdate("shippedOrders", state, action);
    case actionType.SHIPPEDORDERS_ON_ERROR:
      return applyError(state, action);
    default:
      return state;
  }
};
