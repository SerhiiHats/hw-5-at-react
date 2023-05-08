import {combineReducers} from "redux";
import headerReducer from "../components/Header/headerReducer";
import formReducer from "../components/FormFeedback/formReducer";


export default combineReducers({
    dataTask: headerReducer,
    dataRequest: formReducer,
  });


