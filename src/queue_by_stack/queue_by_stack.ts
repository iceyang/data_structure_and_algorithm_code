/**
 * 由栈实现的队列
 * 只保存一个栈，入队时，直接进栈，出队时，需要先将栈反转，出栈后再反转回来
 */
import Stack from '../lib/stack';

export interface Queue<T> {
  length(): number;

  push(t: T): void;
  
  poll(): T | undefined;
}

export class QueueByStack<T> implements Queue<T> {
  private stack: Stack<T> = new Stack<T>();

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
    if (this.length() <= 0) return undefined;
    this.reverseStack();
    const result = this.stack.pop();
    this.reverseStack();
    return result;
  }
}

/**
 * 优化版本，保存两个栈，一个用于入队(S1)，一个用于出队(S2)。
 * 入队时：直接进栈S1
 * 出队时：假如S2为空，则将S1倒入S2中，S2出栈；如果S2不为空，则S2直接出栈
 */
export class QueueByStack2<T> implements Queue<T>{
  private s1: Stack<T> = new Stack<T>();
  private s2: Stack<T> = new Stack<T>();

  length(): number { return this.s1.length() + this.s2.length(); }

  push(t: T) {
    this.s1.push(t);
  }

  poll(): T | undefined {
    if (this.length() <= 0) return undefined;
    if (this.s2.length() > 0) return this.s2.pop();
    while (this.s1.length() > 0) {
      this.s2.push(<T>this.s1.pop());
    }
    return this.s2.pop();
  }
}
