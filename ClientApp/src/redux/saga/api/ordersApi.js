import fetchApi from "./fetchApi";

export const queryOrders = async () => fetchApi("api/Orders").then((res) => res.json());

export const shippedOrders = (payload) =>
  fetchApi("api/Orders/Shipped", {
    method: "PUT",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(payload),
  });
