// FIFO
export class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  enqueue(item: T): void {
    this.length++;
    const node: Node<T> = { value: item };
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    this.length--;
    const head = this.head; // we save our current head to return it
    this.head = this.head.next; // we update the head
    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  print() {
    if (!this.head) {
      console.log("empty queue");
      return;
    }
    let curr = this.head;
    let output = "{ ";
    output += curr.value;
    output += " }";
    while (curr.next) {
      curr = curr.next;
      output += " -> { ";
      output += curr.value;
      output += " }";
    }
    console.log(output);
  }
}

type Node<T> = {
  value: T;
  next?: Node<T>;
};
