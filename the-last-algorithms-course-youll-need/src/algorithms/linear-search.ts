function linearSearch(arr: number[], num: number): boolean {
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] === num) return true;
  }
  return false;
}

export default linearSearch;
