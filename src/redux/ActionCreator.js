import * as types from "./ActionTypes";

export const bookSlot = (data) => (dispatch) => {
  dispatch({
    type: types.SET_BOOKED,
    payload: data,
  });
};
