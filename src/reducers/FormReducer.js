import uuid from 'uuid/v4';

export const FormReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FORM':
      return [...state, {
        frontname: "Front name: " + action.form.frontname, 
        lastname: "Last name: " + action.form.lastname, 
        cpr: "Cpr:" + action.form.cpr, 
        id: uuid()}
      ]
    case 'REMOVE_FORM':
      return state.filter(form => form.id !== action.id);
    default:
      return state;
  }
} 