import postOrderSearch from "../algorithms/binary-tree-post-order-search";
import { tree } from "../constants";

test("binary tree post-order search", () => {
  expect(postOrderSearch(tree)).toEqual([
    7, 5, 15, 10, 29, 45, 30, 100, 50, 20,
  ]);
});
