function binarySearch(arr: number[], num: number): boolean {
  let low = 0;
  let high = arr.length;
  do {
    const midIdx = Math.floor(low + (high - low) / 2);
    const midValue = arr[midIdx];
    if (midValue === num) {
      return true;
    } else if (midValue > num) {
      high = midIdx;
    } else {
      low = midIdx + 1;
    }
  } while (low < high);
  return false;
}

export default binarySearch;
