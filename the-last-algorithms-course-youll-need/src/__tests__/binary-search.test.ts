import binarySearch from "../algorithms/binary-search";
import { orderedArray } from "../constants";

test("binary search", () => {
  expect(binarySearch(orderedArray, 1)).toEqual(true);
  expect(binarySearch(orderedArray, 5)).toEqual(true);
  expect(binarySearch(orderedArray, 8)).toEqual(true);
  expect(binarySearch(orderedArray, 9)).toEqual(true);
  expect(binarySearch(orderedArray, 10)).toEqual(false);
});
