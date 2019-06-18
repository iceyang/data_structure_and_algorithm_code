/**
 * 由队列实现的栈
 */
import Queue from '../lib/queue';

export default class StackByQueue<T> {
  private queue: Queue<T> = new Queue<T>();

  length(): number { return this.queue.length(); }

  push(t: T) {
    this.queue.push(t);
  }

  pop(): T | undefined {
    const length = this.length();
    if (length > 1) {
      for (let i = 0; i < length - 1; i++) {
        this.queue.push(<T>this.queue.poll());
      }
    }
    return this.queue.poll();
  }
}
