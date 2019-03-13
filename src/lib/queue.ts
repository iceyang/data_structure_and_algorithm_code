export default class Queue<T> {
  array: Array<T> = [];

  length(): number { return this.array.length; }

  push(t: T) { this.array.push(t); }

  poll(): T | undefined {
    const value = this.array.length > 0 ? this.array[0] : undefined;
    this.array = this.array.slice(1, this.array.length);
    return value;
  }
}
