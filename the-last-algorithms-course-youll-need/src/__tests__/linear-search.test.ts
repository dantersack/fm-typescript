import linearSearch from "../algorithms/linear-search";
import { unorderedArray } from "../constants";

test("linear search", () => {
  expect(linearSearch(unorderedArray, 13)).toEqual(true);
  expect(linearSearch(unorderedArray, 69)).toEqual(true);
  expect(linearSearch(unorderedArray, 564)).toEqual(false);
});
