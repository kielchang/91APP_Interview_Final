export const actionType = {
  ORDERSFORM_SELECTED_ORDER: "ORDERSFORM_SELECTED_ORDER",
  ORDERSFORM_SELECTED_CANCEL: "ORDERSFORM_SELECTED_CANCEL",
  ORDERSFORM_ON_SUBMIT: "ORDERSFORM_ON_SUBMIT",
  ORDERSFORM_ON_ERROR: "ORDERSFORM_ON_ERROR",
  ORDERSFORM_ON_INIT: "ORDERSFORM_ON_INIT",
};

export const doOrdersFormSelectedOrder = (payload) => ({
  type: actionType.ORDERSFORM_SELECTED_ORDER,
  payload,
});

export const doOrdersFormSelectedCancel = (payload) => ({
  type: actionType.ORDERSFORM_SELECTED_CANCEL,
  payload,
});

export const doOrdersFormOnSubmit = () => ({
  type: actionType.ORDERSFORM_ON_SUBMIT,
});

export const doOrdersFormOnError = (payload) => ({
  type: actionType.ORDERSFORM_ON_ERROR,
  payload,
});

export const doOrdersFormOnInit = () => ({
  type: actionType.ORDERSFORM_ON_INIT,
});
