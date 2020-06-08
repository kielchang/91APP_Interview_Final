export const getOrders = ({ ordersState }) => ordersState.orders;
export const getOrdersSelectedIds = ({ ordersFormState }) => ordersFormState.selectedIds;

export const getOrdersRowData = (state) => {
  const orders = getOrders(state);
  const selectedIds = getOrdersSelectedIds(state);

  return orders.map((order) => ({ ...order, checked: selectedIds.has(order.id) }));
};

export const getOrdersIsFetch = ({ ordersState }) => ordersState.isFetch;

export const getOrdersFormIsFetch = ({ ordersFormState }) => ordersFormState.isFetch;
