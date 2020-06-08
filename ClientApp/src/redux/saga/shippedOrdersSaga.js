import { takeLatest, call, put } from "redux-saga/effects";
import { actionType, doShippedOrdersUpdate, doShippedOrdersError } from "../actions/shippedOrdersAction";
import { queryShippedOrders } from "./api/shippedOrdersApi";

function* handleShippedOrdersQuery() {
  try {
    const result = yield call(queryShippedOrders);
    yield put(doShippedOrdersUpdate(result));
  } catch (error) {
    yield put(doShippedOrdersError({ type: "Query Error", message: error.message }));
  }
}

export default [takeLatest(actionType.SHIPPEDORDERS_ON_FETCH, handleShippedOrdersQuery)];
