import { sum } from "../Jest";

interface IObject {
  [key:string]:number
}

describe('Matcher test',()=>{
  
  //toBeはObject.isと同じ処理になる
  test('add 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
  })

  //オブジェクトの値の比較を行いたい場合はtoEqualを使う
  test('object assignment', () => {
    const data:IObject = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

  //真偽値のチェックには色々なMatcherがある
  test('null',()=>{
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  })

  //数値を比較するためのMatcherもいろいろある
  test('two plus two',()=>{
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);//より大きい
    expect(value).toBeGreaterThanOrEqual(4);//以上
    expect(value).toBeLessThan(5);//未満
    expect(value).toBeLessThanOrEqual(4);//以下

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  })

  
});
