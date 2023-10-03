import inOrderSearch from "../algorithms/binary-tree-in-order-search";
import { tree } from "../constants";

test("binary tree pre-order search", () => {
  expect(inOrderSearch(tree)).toEqual([5, 7, 10, 15, 20, 29, 30, 45, 50, 100]);
});
