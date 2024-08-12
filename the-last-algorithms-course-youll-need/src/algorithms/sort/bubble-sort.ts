// Big O
// 1. Growth is with respect to the input
// 2. Always look for loops (where do you loop over the input?)
// 3. Always drop contants: O(2N) --> O(N)
// 4. If the input halves at each step, its likely O(logN) or O(NlogN)
// 5. Drop insignificant variables: O(N^2+N) --> O(N^2)

// Bubble Sort = O(N^2)
function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

export { bubbleSort };
