import { takeLatest, call, select, put } from "redux-saga/effects";
import { actionType, doOrdersFormOnError, doOrdersFormOnInit } from "../actions/ordersFormAction";
import { doOrdersFetch } from "../actions/ordersAction";
import { shippedOrders } from "./api/ordersApi";
import { getOrdersSelectedIds } from "../selectors/ordersSelector";

function* handleOrdersShipped() {
  try {
    const selectedIds = yield select(getOrdersSelectedIds);
    yield call(shippedOrders, Array.from(selectedIds));
    yield put(doOrdersFormOnInit());
    yield put(doOrdersFetch());
  } catch (error) {
    yield put(doOrdersFormOnError({ type: "Submit Error", message: error.message }));
  }
}

export default [takeLatest(actionType.ORDERSFORM_ON_SUBMIT, handleOrdersShipped)];
