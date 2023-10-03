import { BinaryNode } from "../types";

function breadthFirstSearch(head: BinaryNode<number>, num: number): boolean {
  const queue: BinaryNode<number>[] = [head];

  while (queue.length) {
    const curr = queue.shift();
    if (curr.value === num) {
      return true;
    }
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }

  return false;
}

export default breadthFirstSearch;
