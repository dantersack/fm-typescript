// Given two crystal balls that will break if dropped from high enough
// distance, determine the exact spot in which it will break in the most
// optimized way.

// O(sqrt(N))
function twoCrystallBalls(arr: boolean[]): number {
  const step = Math.floor(Math.sqrt(arr.length));

  let i = step;

  for (; i < arr.length; i += step) {
    if (arr[i] === true) {
      // First crystal ball breaks
      break;
    }
  }

  for (let j = i - step; j <= i; j++) {
    if (arr[j] === true) {
      // Second crystal ball breaks
      return j;
    }
  }

  return -1;
}

export { twoCrystallBalls };
