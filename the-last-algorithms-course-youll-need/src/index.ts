import { solve } from "./algorithms/recursion/maze-solver";

const maze = [
  "xxxxxxxxxx x",
  "x xx     x x",
  "x     xxxx x",
  "x xxxxxxxx x",
  "x          x",
  "x xxxxxxxxxx",
];

const result = solve(maze, "x", { x: 10, y: 0 }, { x: 1, y: 5 });
console.log(result);
