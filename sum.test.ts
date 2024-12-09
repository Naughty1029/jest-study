import { describe, expect, test } from "@jest/globals";
import { sum } from "./sum";

test('adds 1 + 2 to equal 3', ()=> {
  expect(sum(1,2)).toBe(3);
})

//toBe は Object.is を使用して厳密な等価性をテストする。
test('2 + 2 = 4',()=>{
  expect(2 + 2).toBe(4);
})

//toEqual は、オブジェクトまたは配列のすべてのフィールドを再帰的にチェックする
test('object assignment', () => {
  const data = { one: 1};
  data['two'] = 2;
  expect(data).toEqual({
    one:1,
    two:2
  })
})