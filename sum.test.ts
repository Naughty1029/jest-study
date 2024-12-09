import { describe, expect, test } from "@jest/globals";
import { sum } from "./sum";

test('adds 1 + 2 to equal 3', ()=> {
  expect(sum(1,2)).toBe(3);
})

//toBe は Object.is を使用して厳密な等価性をテストする。
test('2 + 2 = 4',()=>{
  expect(2 + 2).toBe(4);
})

