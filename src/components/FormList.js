import React, { useContext } from 'react';
import FormDetails from './FormDetails';
import { FormContext } from '../contexts/FormContext';

const FormList = () => {
  const { forms } = useContext(FormContext);
  return forms.length ? (
    <div className="form-list">
      <ul>
        {forms.map(form => {
          return ( <FormDetails form={form} key={form.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">There are currently no costumer forms in your database...</div>
  );
}

export default FormList;
