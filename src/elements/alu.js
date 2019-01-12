import React from 'react';
import Button from './button';
import Output from './output';
import './alu.css';

const ALU = ({ input }) => (
  <div className='alu'>
    <div className='error'>
      <Output input='error' />
    </div>
    <div className='row'>
      <Button input='a7' />
      <Button input='a6' />
      <Button input='a5' />
      <Button input='a4' />
      
      <Button input='a3' />
      <Button input='a2' />
      <Button input='a1' />
      <Button input='a0' />
    </div>
    <div className='row'>
      <Button input='b7' />
      <Button input='b6' />
      <Button input='b5' />
      <Button input='b4' />

      <Button input='b3' />
      <Button input='b2' />
      <Button input='b1' />
      <Button input='b0' />
    </div>
    <div className='row'>
      <Output input='out7' />
      <Output input='out6' />
      <Output input='out5' />
      <Output input='out4' />

      <Output input='out3' />
      <Output input='out2' />
      <Output input='out1' />
      <Output input='out0' />
    </div>
  </div>
);



export default ALU;
