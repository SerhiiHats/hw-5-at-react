export const ADD_EURO = "ADD_EURO";

export const ADD_UAN = "ADD_UAN";

export const convertACAddEuro = (value) =>{
  return {
    type: ADD_EURO,
    payload: value,
  }
}

export const convertACAddUan = (value) =>{
    return {
      type: ADD_UAN,
      payload: value,
    }
  }