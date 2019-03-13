/**
 * 由栈实现的队列
 */

import Stack from '../lib/stack';

export default class QueueByStack<T> {
  stack: Stack<T> = new Stack<T>();

  length(): number { return this.stack.length(); }

  private reverseStack(): void {
    const result = new Stack<T>();
    do {
      const value = this.stack.pop();
      if (!value) break;
      result.push(value);
    } while (true)
    this.stack = result;
  }

  push(t: T) {
    this.stack.push(t);
  }

  poll(): T | undefined {
    if (this.stack.length() <= 0) return undefined;
    this.reverseStack();
    const result = this.stack.pop();
    this.reverseStack();
    return result;
  }
}
