import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL,
  SET_SMURF_TO_EDIT,
  UPDATE_SMURF_START,
  UPDATE_SMURF_FAIL,
  UPDATE_SMURF_SUCCESS,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAIL,
  DELETE_SMURF_START,
} from "../actions";

const initialState = {
  smurfs: [],
  smurfToEdit: {},
  isDeleting: false,
  isEditing: false,
  isFetching: false,
  isPosting: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case ADD_SMURF_START:
      return {
        ...state,
        isPosting: true,
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isPosting: false,
      };
    case ADD_SMURF_FAIL:
      return {
        ...state,
        isPosting: false,
        error: action.payload,
      };
    case SET_SMURF_TO_EDIT:
      return {
        ...state,
        isEditing: true,
        smurfToEdit: action.payload,
      };
    case UPDATE_SMURF_START:
      return {
        ...state,
        isEditing: true,
      };
    case UPDATE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isEditing: false,
      };
    case UPDATE_SMURF_FAIL:
      return {
        ...state,
        isEditing: false,
        error: action.payload,
      };
    case DELETE_SMURF_START:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isDeleting: false,
      };
    case DELETE_SMURF_FAIL:
      return {
        ...state,
        isDeleting: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
