  
import React, { useContext } from 'react';
import { FormContext } from '../contexts/FormContext';

const Navbar = () => {
  const { forms } = useContext(FormContext);
  return (
    <div className="navbar">
      <h1>Costumer Form</h1>
      <p>Currently you have {forms.length} forms in your database...</p>
    </div>
  );
}
 
export default Navbar;