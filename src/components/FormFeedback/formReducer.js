import initialStore from "../../redux/initialStore";
import {ADD_REQUEST} from "./formAction";

export const formReducer = (request = initialStore.requestForm, action) => {
  switch (action.type) {
    case ADD_REQUEST: {
      return {
        request: action.payload,
      }
    }
    default:
      return request;
  }
}