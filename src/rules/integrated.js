import { xor, and, or } from 'regent';
import {
  A0, A1, A2, A3,
  A4, A5, A6, A7,
  B0, B1, B2, B3,
  B4, B5, B6, B7, 
} from './inputs';

const HALF_ADDER = (A, B) => ({
  S: xor(A, B),
  C: and(A, B),
});

const ADDER = (A, B, C) => ({
 S: xor( xor(A, B), C),
 C: or( and( xor(A, B), C), and(A, B) ),
});

// Wire up the inputs and outputs of the ALU
const { S:OUT_0, C:C0 } = HALF_ADDER(A0, B0);
const { S:OUT_1, C:C1 } = ADDER(A1, B1, C0);
const { S:OUT_2, C:C2 } = ADDER(A2, B2, C1);
const { S:OUT_3, C:C3 } = ADDER(A3, B3, C2);

const { S:OUT_4, C:C4 } = ADDER(A4, B4, C3);
const { S:OUT_5, C:C5 } = ADDER(A5, B5, C4);
const { S:OUT_6, C:C6 } = ADDER(A6, B6, C5);
const { S:OUT_7, C:ERROR } = ADDER(A7, B7, C6);

// An ALU is just ADDERS in series
const ALU_8 = { OUT_0, OUT_1, OUT_2, OUT_3, OUT_4, OUT_5, OUT_6, OUT_7, ERROR };

export default ALU_8;
