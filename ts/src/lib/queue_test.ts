import Queue from './queue';
import { expect } from 'chai';

const queue = new Queue<number>();

queue.push(1);
expect(queue.array).to.deep.equal([1]);
queue.push(2);
queue.push(3);
expect(queue.array).to.deep.equal([1, 2, 3]);

const firstValue = queue.poll();
expect(firstValue).to.equal(1);
expect(queue.array).to.deep.equal([2, 3]);
