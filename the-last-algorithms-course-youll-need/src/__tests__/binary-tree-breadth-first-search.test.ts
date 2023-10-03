import breadthFirstSearch from "../algorithms/binary-tree-breadth-first-search";
import { tree } from "../constants";

it("binary tree breadth-first search", () => {
  expect(breadthFirstSearch(tree, 5)).toEqual(true);
  expect(breadthFirstSearch(tree, 30)).toEqual(true);
  expect(breadthFirstSearch(tree, 45)).toEqual(true);
  expect(breadthFirstSearch(tree, 2)).toEqual(false);
});
