import Stack from './stack_by_queue';
import { expect } from 'chai';

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

expect(stack.pop()).to.equal(3);
expect(stack.pop()).to.equal(2);

stack.push(4);
expect(stack.pop()).to.equal(4);
expect(stack.pop()).to.equal(1);
