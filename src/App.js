import React from 'react';
import Navbar from './components/Navbar';
import FormContextProvider from './contexts/FormContext';
import FormList from './components/FormList';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <FormContextProvider>
        <Navbar />
        <Form />
        <FormList />
      </FormContextProvider>
    </div>
  );
}

export default App;