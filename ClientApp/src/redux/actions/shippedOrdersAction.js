export const actionType = {
  SHIPPEDORDERS_ON_FETCH: "SHIPPEDORDERS_ON_FETCH",
  SHIPPEDORDERS_ON_UPDATE: "SHIPPEDORDERS_ON_UPDATE",
  SHIPPEDORDERS_ON_ERROR: "SHIPPEDORDERS_ON_ERROR",
};

export const doShippedOrdersFetch = () => ({
  type: actionType.SHIPPEDORDERS_ON_FETCH,
});

export const doShippedOrdersUpdate = (payload) => ({
  type: actionType.SHIPPEDORDERS_ON_UPDATE,
  payload,
});

export const doShippedOrdersError = (payload) => ({
  type: actionType.SHIPPEDORDERS_ON_ERROR,
  payload,
});
