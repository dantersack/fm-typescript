import { Queue } from "./algorithms/sort/queue";

const queue = new Queue<number>();

queue.print();
console.log(queue.length);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(10);
console.log(queue.peek());

queue.print();
console.log(queue.length);

queue.deque();
console.log(queue.peek());

queue.print();
console.log(queue.length);
