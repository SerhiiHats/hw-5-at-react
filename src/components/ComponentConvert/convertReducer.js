import initialStore from "../../redux/initialStore";
import {ADD_EURO, ADD_UAN} from "./convertAction";

const convertReducer = (currency = initialStore.currency, action) => {
  switch (action.type) {
    case ADD_EURO: {
      return {
        euro: action.payload,
        uan: action.payload * 40.72,
      }
    }
    case ADD_UAN: {
      return {
        euro: action.payload / 40.72,
        uan: action.payload,
      }
    }
    default: {
      return currency;
    }
  }
}

export default convertReducer;