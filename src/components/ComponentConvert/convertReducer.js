import initialStore from "../../redux/initialStore";
import { ADD_EURO, ADD_UAN } from "../ComponentConvert/convertAction";

const convertReducer = (currency=initialStore.currency, action) => {
    console.log(currency);
    switch (action.type) {
        case ADD_EURO: {
            return {
                currency: {
                    euro: action.payload,
                    uan: action.payload * 40.72,
                }

            }
        };
        case ADD_UAN: {
            return {
                currency: {
                    euro: action.payload / 40.72,
                    uan: action.payload,
                }
            }
        };
        default: 
        return {
            currency: {
                euro: currency.euro,
                uan: currency.uan,
            }
        }
             
    }
}

export default convertReducer;