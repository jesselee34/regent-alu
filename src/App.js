import React, { useState } from 'react';
import ALU from './elements/alu';
import './App.css';

const inputs = {
  a0: 0,
  a1: 0,
  a2: 0,
  a3: 0,

  a4: 0,
  a5: 0,
  a6: 0,
  a7: 0,

  b0: 0,
  b1: 0,
  b2: 0,
  b3: 0,

  b4: 0,
  b5: 0,
  b6: 0,
  b7: 0,

  out0: 0,
  out1: 0,
  out2: 0,
  out3: 0,
  out4: 0,
  out5: 0,
  out6: 0,
  out7: 0,

  error: 0,
};

export const Context = React.createContext(inputs);

const App = () => {
  const [state, setState] = useState(inputs);

  // Here is the 
  return (
    <Context.Provider value={{ state, setState }}>
      <div className='wrapper'>
        <h1>Regent Composition Example</h1>
        <h3>Using Regent's powerful composition api to create a simulated <br/>8-bit ALU</h3>
        <ALU />
      </div>
    </Context.Provider>
  );
};

export default App;
