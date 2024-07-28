import { binarySearch } from "../../algorithms/search/binary-search";
import { orderedArray } from "../../constants";

test("binary search", () => {
  expect(binarySearch(orderedArray, -1)).toEqual(false);
  expect(binarySearch(orderedArray, 0)).toEqual(false);
  expect(binarySearch(orderedArray, 1)).toEqual(true);
  expect(binarySearch(orderedArray, 2)).toEqual(true);
  expect(binarySearch(orderedArray, 3)).toEqual(true);
  expect(binarySearch(orderedArray, 4)).toEqual(true);
  expect(binarySearch(orderedArray, 5)).toEqual(true);
  expect(binarySearch(orderedArray, 6)).toEqual(true);
  expect(binarySearch(orderedArray, 7)).toEqual(true);
  expect(binarySearch(orderedArray, 8)).toEqual(true);
  expect(binarySearch(orderedArray, 9)).toEqual(true);
  expect(binarySearch(orderedArray, 10)).toEqual(false);
  expect(binarySearch(orderedArray, 9999999)).toEqual(false);
});
