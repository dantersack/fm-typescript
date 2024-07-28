// Big O
// 1. Growth is with respect to the input
// 2. Always look for loops (where do you loop over the input?)
// 3. Always drop contants: O(2N) --> O(N)
// 4. If the input halves at each step, its likely O(logN) or O(NlogN)

// Binary Search = O(logN)
function binarySearch(arr: number[], val: number): boolean {
  let low = 0;
  let high = arr.length;
  do {
    const middle = Math.floor(low + (high - low) / 2);
    const middleValue = arr[middle];
    if (middleValue === val) {
      return true;
    } else if (middleValue > val) {
      high = middle;
    } else {
      low = middle + 1;
    }
  } while (low < high);
  return false;
}

export { binarySearch };
