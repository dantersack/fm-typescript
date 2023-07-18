import linearSearch from "../algorithms/linear-search";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

test("linear search", () => {
  expect(linearSearch(arr, 1)).toEqual(true);
  expect(linearSearch(arr, 7)).toEqual(true);
  expect(linearSearch(arr, 10)).toEqual(false);
});
