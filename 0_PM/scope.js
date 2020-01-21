/**
 * Part 1:
 *    What will print and why?
 *    What will change if we delete line 15? Why?
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

const x = () => {
  let a = 2;
  console.log(a);
}

const y = () => {
  let a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();


/**
 * Part 1:
 * 
 * will print
 * 1
 * 2
 * undefined
 * (bc x() reinitializes a w/out setting a value)
 * 
 * if delete line 15, will print
 * 1
 * 2
 * 1
 * (bc the the a in function y is a local variable)
 * 
 */

