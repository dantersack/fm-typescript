// Big O
// 1. Growth is with respect to the input
// 2. Always look for loops (where do you loop over the input?)
// 3. Always drop contants: O(2N) --> O(N)

// Linear Search = O(N)
function linearSearch(arr: number[], val: number): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return true;
  }
  return false;
}

export { linearSearch };
