let age: number = 29;

const literalType = 6;

// random time between 500 and 1000 milliseconds
const RANDOM_WAIT_TIME = Math.round(Math.random() * 500 + 500);

let startTime = new Date();
let endTime;

setTimeout(() => {
  endTime = 0;
  endTime = new Date();
}, RANDOM_WAIT_TIME);

function add(a: number, b: number): number {
  return a + b;
}

const result = add(2, 3);
