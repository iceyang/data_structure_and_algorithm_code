import { expect } from 'chai';

import { dynamic_programming_one } from './dynamic_programming';
import Item from './item';

const items = new Array<Item>();
items.push(new Item(2, 3));
items.push(new Item(3, 4));
items.push(new Item(4, 5));
items.push(new Item(5, 6));

const capacity = 8;

expect(dynamic_programming_one(items, capacity)).to.equal(10);
