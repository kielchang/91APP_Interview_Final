export const applyOnFetch = (state, actions) => ({
  ...state,
  isFetch: true,
});

export const applyUpdate = (key, state, { payload }) => ({
  ...state,
  isFetch: false,
  [key]: payload,
});

export const applyError = (state, { payload }) => ({
  ...state,
  isFetch: false,
  error: payload,
});
