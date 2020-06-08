import authService from "../../../components/api-authorization/AuthorizeService";

export default async (url, options) => {
  const token = await authService.getAccessToken();
  var headers = {
    "Content-Type": "application/json",
  };

  if (token) headers.Authorization = `Bearer ${token}`;

  return fetch(url, {
    ...options,
    headers,
  });
};
