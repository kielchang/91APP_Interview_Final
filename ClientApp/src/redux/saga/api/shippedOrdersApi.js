import fetchApi from "./fetchApi";

export const queryShippedOrders = async () => fetchApi("api/ShippedOrders").then((res) => res.json());
