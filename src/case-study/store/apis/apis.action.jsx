import fetchPublicApis from '../../service/rest.service';

export const APIS_ACTION_TYPES = {
  FETCH_REQUEST: '[APIS] FETCH_REQUEST',
  FETCH_SUCCESS: '[APIS] FETCH_SUCCESS',
  FETCH_FAIL: '[APIS] FETCH_FAIL',
  UPDATE_DESCRIPTION: '[APIS] UPDATE_DESCRIPTION',
  DELETE_ROW: '[APIS] DELETE_ROW',
  SET_LOCAL_APIS: '[APIS] SET_LOCAL_APIS',
};

export function fetchAllApisAction() {
  return (dispatch) => {
    dispatch({ type: APIS_ACTION_TYPES.FETCH_REQUEST });
    fetchPublicApis()
      .then((response) => {
        dispatch({
          type: APIS_ACTION_TYPES.FETCH_SUCCESS,
          payload: {
            response,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: APIS_ACTION_TYPES.FETCH_FAIL,
          payload: {
            errors: [`something went wrong: ${err}`],
          },
        });
      });
  };
}

// implement fetch all based on async await
export function asyncFetchAllApisAction() {
  return async (dispatch) => {
    dispatch({ type: APIS_ACTION_TYPES.FETCH_REQUEST });
    try {
      const response = await fetchPublicApis();
      dispatch({
        type: APIS_ACTION_TYPES.FETCH_SUCCESS,
        payload: {
          response,
        },
      });
    } catch (err) {
      dispatch({
        type: APIS_ACTION_TYPES.FETCH_FAIL,
        payload: {
          errors: [`something went wrong: ${err}`],
        },
      });
    }
  };
}

export function updateDescriptionAction(index, description) {
  return {
    type: APIS_ACTION_TYPES.UPDATE_DESCRIPTION,
    payload: {
      index,
      description,
    },
  };
}

export function deleteRowAction(index) {
  return {
    type: APIS_ACTION_TYPES.DELETE_ROW,
    payload: {
      index,
    },
  };
}
