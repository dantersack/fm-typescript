import { BinaryNode } from "../types";

export const unorderedArray = [13, 6, 555, 69, 280, 4, 23, 1003, 2, 440];

export const orderedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 *                                 20
 *                               /    \
 *                              /      \
 *                             /        \
 *                            10        50
 *                           /  \      /  \
 *                          /    \    /    \
 *                         5     15  30    100
 *                          \        / \
 *                           \      /   \
 *                            7    29   45
 *
 *   Pre-order (root at first): 20, 10, 5, 7, 15, 50, 30, 29, 45, 100
 *   In-order (root in the middle): 5, 7, 10, 15, 20, 29, 30, 45, 50, 100
 *   Post-order (root at the end): 7, 5, 15, 10, 29, 45, 30, 100, 50, 20
 */
export const tree: BinaryNode<number> = {
  value: 20,
  left: {
    value: 10,
    left: {
      value: 5,
      left: null,
      right: {
        value: 7,
        left: null,
        right: null,
      },
    },
    right: {
      value: 15,
      left: null,
      right: null,
    },
  },
  right: {
    value: 50,
    left: {
      value: 30,
      right: {
        value: 45,
        right: null,
        left: null,
      },
      left: {
        value: 29,
        right: null,
        left: null,
      },
    },
    right: {
      value: 100,
      right: null,
      left: null,
    },
  },
};
