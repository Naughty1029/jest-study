import { forEach } from "../Mock";

describe('Mock test',()=>{
  test('mock ', () => {
    const mockCallback = jest.fn(x => 42 + x);
    forEach([0, 1], mockCallback);
    //モック関数には、この特別な .mock プロパティがあり、モック関数呼び出し時のデータと、関数の返り値が記録されている
    console.log(mockCallback.mock);
    /*
    {
      calls: [ [ 0 ], [ 1 ] ],
      instances: [ undefined, undefined ],
      invocationCallOrder: [ 1, 2 ],
      results: [ { type: 'return', value: 42 }, { type: 'return', value: 43 } ],
      lastCall: [ 1 ]
    }
    */

    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    expect(mockCallback.mock.results[0].value).toBe(42);
  })
  
});
