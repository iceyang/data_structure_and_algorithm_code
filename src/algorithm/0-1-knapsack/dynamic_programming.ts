/**
 * 动态规划解法
 * TODO. 解法描述
 */

import Item from './item';

/**
 * 数组容量多一是为了起到哨兵作用
 */
export function dynamic_programming_one(items: Array<Item>, capacity: number): number {
  const length = items.length;
  const result = new Array(length+1).fill(0).map(i => {
    return new Array(capacity+1).fill(0);
  });

  for (let i = 1; i <= length; i++) {
    for (let c = 1; c <= capacity; c++) {
      const { weight, value } = items[i-1]; 
      if (weight > c) {
        result[i][c] = result[i-1][c];
      } else {
        result[i][c] = Math.max(result[i-1][c], result[i-1][c-weight]+value);
      }
    }
  }
  return result[length][capacity];
}
