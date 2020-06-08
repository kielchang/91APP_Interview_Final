import { actionType } from "../actions/ordersFormAction";
import { applyOnFetch, applyError } from "./apply";
const initialState = {
  selectedIds: new Set(),
  isFetch: false,
  error: null,
};

const applySelected = (state, { payload }) => {
  const selectedIds = state.selectedIds;
  selectedIds.add(payload);

  return {
    ...state,
    selectedIds,
  };
};

const applyCancel = (state, { payload }) => {
  const selectedIds = state.selectedIds;
  selectedIds.delete(payload);

  return {
    ...state,
    selectedIds,
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.ORDERSFORM_SELECTED_ORDER:
      return applySelected(state, action);
    case actionType.ORDERSFORM_SELECTED_CANCEL:
      return applyCancel(state, action);
    case actionType.ORDERSFORM_ON_SUBMIT:
      return applyOnFetch(state, action);
    case actionType.ORDERSFORM_ON_ERROR:
      return applyError(state, action);
    case actionType.ORDERSFORM_ON_INIT:
      return {
        ...initialState,
        selectedIds: new Set(),
      };

    default:
      return state;
  }
};
