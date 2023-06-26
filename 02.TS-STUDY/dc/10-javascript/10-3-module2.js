import add, { print } from './10-3-module1.js';
import * as calculator from './10-3-module3.js';

// default로 선언되면 {} 안에 들어가지 않음
// default로 선언되지 않으면 {} 안에 들어감

// default로 선언되면 이름을 다르게 받아올 수 있음
// -> import sum from './~~'; 가능

// default로 선언되지 않으면 as로 이름 다르게 받아올 수 있음
// -> import { print as printMessage } from './~~';

console.log(add(1, 2));
print();

console.log(calculator.add1(1, 2));
calculator.print1();
