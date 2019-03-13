export default class Stack<T> {
  array: Array<T> = [];

  length(): number { return this.array.length; }

  push(t: T) { this.array.push(t); }

  pop(): T | undefined { return this.array.pop(); }
}
