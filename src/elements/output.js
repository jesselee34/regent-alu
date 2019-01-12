import React, { useContext } from 'react';
import { evaluate } from 'regent';
import { Context } from '../App';
import ALU_8 from '../rules/integrated';

const process = (inputs) => ({
    out0: evaluate(ALU_8.OUT_0, inputs) ? 1 : 0,
    out1: evaluate(ALU_8.OUT_1, inputs) ? 1 : 0,
    out2: evaluate(ALU_8.OUT_2, inputs) ? 1 : 0,
    out3: evaluate(ALU_8.OUT_3, inputs) ? 1 : 0,
    
    out4: evaluate(ALU_8.OUT_4, inputs) ? 1 : 0,
    out5: evaluate(ALU_8.OUT_5, inputs) ? 1 : 0,
    out6: evaluate(ALU_8.OUT_6, inputs) ? 1 : 0,
    out7: evaluate(ALU_8.OUT_7, inputs) ? 1 : 0,

    error: evaluate(ALU_8.ERROR, inputs) ? 1 : 0,
  }
);

const Output = ({ input }) => {
  const { state } = useContext(Context);
  const local = { ...state, ...process(state) };

  return (
    <div className='switch read-only'>
      <input type='checkbox' readOnly checked={!!local[input]} />
      <label />
    </div>
  );
};

export default Output;
