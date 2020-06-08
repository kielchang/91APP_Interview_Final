export const actionType = {
  ORDERS_ON_FETCH: "ORDERS_ON_FETCH",
  ORDERS_ON_UPDATE: "ORDERS_ON_UPDATE",
  ORDERS_ON_ERROR: "ORDERS_ON_ERROR",
};

export const doOrdersFetch = () => ({
  type: actionType.ORDERS_ON_FETCH,
});

export const doOrdersUpdate = (payload) => ({
  type: actionType.ORDERS_ON_UPDATE,
  payload,
});

export const doOrdersError = (payload) => ({
  type: actionType.ORDERS_ON_ERROR,
  payload,
});
