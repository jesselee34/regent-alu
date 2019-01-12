import React, { useContext } from 'react';
import { Context } from '../App';

const Button = ({ input }) => {
  const { state, setState } = useContext(Context);

  const set = (input, state) => {
    state[input] = state[input] === 0 ? 1 : 0;
    setState(state);
  };

  return (
    <div onClick={() => set(input, state)} className='switch'>
      <input type='checkbox' readOnly checked={!!state[input]} />
      <label />
    </div>
  );
};

export default Button;
