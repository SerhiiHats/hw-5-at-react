import initialStore from "../../redux/initialStore";
import {VIEW_DESCRIPTION_1, VIEW_TITLE_1} from "./headerAction";

const headerReducer = (data = initialStore.dataHeader, action) => {
  switch (action.type) {
    // case VIEW_TITLE_1: {
    //   return {
    //     title: data.task1,
    //   }
    // }
    // case VIEW_DESCRIPTION_1: {
    //   return {
    //     description: data.description1,
    //   }
    // }
    default:
      return data;
  }

}

export default headerReducer;