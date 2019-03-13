import Queue from './queue_by_stack';
import { expect } from 'chai';

const queue = new Queue<number>();

queue.push(1);
queue.push(2);
queue.push(3);

expect(queue.poll()).to.equal(1);
expect(queue.poll()).to.equal(2);

queue.push(4);
expect(queue.poll()).to.equal(3);
