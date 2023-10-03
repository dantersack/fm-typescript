import preOrderSearch from "../algorithms/binary-tree-pre-order-search";
import { tree } from "../constants";

test("binary tree pre-order search", () => {
  expect(preOrderSearch(tree)).toEqual([20, 10, 5, 7, 15, 50, 30, 29, 45, 100]);
});
