import { SHOW_LOADING, HIDE_LOADING } from "../types/Loadingtype";

const initState = {
  isLoading: false,
};

export const LoadingReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_LOADING: {
      state.isLoading = true;
      return { ...state };
    }
    case HIDE_LOADING: {
      state.isLoading = false;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
