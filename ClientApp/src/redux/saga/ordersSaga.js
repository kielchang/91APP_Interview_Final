import { takeLatest, call, put } from "redux-saga/effects";
import { actionType, doOrdersUpdate, doOrdersError } from "../actions/ordersAction";
import { queryOrders } from "./api/ordersApi";

function* handleOrdersQuery() {
  try {
    const result = yield call(queryOrders);
    yield put(doOrdersUpdate(result));
  } catch (error) {
    yield put(doOrdersError({ type: "Query Error", message: error.message }));
  }
}

export default [takeLatest(actionType.ORDERS_ON_FETCH, handleOrdersQuery)];
