import { fetchData } from "../Async";

describe('非同期コードのテスト',()=>{
  test('the data is peanut butter', () => {
    return fetchData().then(data => {
      expect(data).toBe('peanut butter');
    });
  });

  test('the data is peanut butter', async() => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  })

  test('try catch', async() => {
    await expect(fetchData()).resolves.toBe('peanut butter');
  })
  
  
})