// LIFO
export class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  push(item: T): void {
    const node: Node<T> = { value: item };
    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }
    node.prev = this.head;
    this.head = node;
  }

  pop(): T | undefined {
    if (!this.head) return undefined;
    this.length--;
    const head = this.head; // aux
    this.head = head.prev;
    head.prev = undefined;
    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

type Node<T> = {
  value: T;
  prev?: Node<T>;
};
