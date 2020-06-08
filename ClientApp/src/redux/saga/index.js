import { all } from "redux-saga/effects";
import ordersSaga from "./ordersSaga";
import shippedOrdersSaga from "./shippedOrdersSaga";
import ordersFormSaga from "./ordersFormSaga";

function* rootSaga() {
  yield all([...ordersSaga]);
  yield all([...shippedOrdersSaga]);
  yield all([...ordersFormSaga]);
}

export default rootSaga;
