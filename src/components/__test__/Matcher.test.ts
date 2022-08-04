import { compileAndroidCode, sum } from "../Matcher";

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

  //toMatch で、文字列に対して正規表現でマッチするか確認できる
  test('match string test',()=>{
    expect('team').not.toMatch(/I/);
    expect('Christoph').toMatch(/stop/);
  })

  //toContain を使用して、配列や反復可能なオブジェクトに特定のアイテムが含まれているかどうかを確認できる
  const shoppingList = ['diapers','kleenex','trash bags','paper towels','milk'];
  test('the shopping list has milk on it',()=>{
    expect(shoppingList).toContain('milk');
  })

  //関数が呼び出し時に例外を投げることをテストするには、 toThrow を使用
  test('compiling android goes as expected', () => {
    expect(()=> compileAndroidCode()).toThrow(Error);
  })
  
});
