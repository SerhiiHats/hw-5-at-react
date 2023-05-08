import {combineReducers} from "redux";
import headerReducer from "../components/Header/headerReducer";
import formReducer from "../components/FormFeedback/formReducer";
import convertReducer from "../components/ComponentConvert/convertReducer";


export default combineReducers({
    dataTask: headerReducer,
    dataRequest: formReducer,
    dataConvert: convertReducer,
  });


