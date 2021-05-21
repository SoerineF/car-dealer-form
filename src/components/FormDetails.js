import React, { useContext } from 'react';
import { FormContext } from '../contexts/FormContext';

const FormDetails = ({ form }) => {
  const { dispatch } = useContext(FormContext);
  return (
    <li onClick={() => dispatch({ type: 'REMOVE_FORM', id: form.id })}>
      <div className="frontname">{form.frontname}</div>
      <div className="lastname">{form.lastname}</div>
      <div className="cpr">{form.cpr}</div>
    </li>
  );
}

export default FormDetails;