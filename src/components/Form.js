import React, { useContext, useState } from 'react';
import { FormContext } from '../contexts/FormContext';

const CarDealerForm = () => {
  const { dispatch } = useContext(FormContext);
  const [frontname, setFrontname] = useState('');
  const [lastname, setLastname] = useState('');
  const [cpr, setCpr] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_FORM', form: { frontname, lastname, cpr }});
    setFrontname('');
    setLastname('');
    setCpr('');
    alert('A form was submitted');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="First name" required value={frontname}
        onChange={(e) => setFrontname(e.target.value)} />

      <input type="text" placeholder="Last name" required value={lastname}
        onChange={(e) => setLastname(e.target.value)} />

        <input type="text"  placeholder="CPR" required value={cpr}
        onChange={(e) => setCpr(e.target.value)} />

      <input type="submit" value="Submit" />
    </form>
  );
}
 
export default CarDealerForm;