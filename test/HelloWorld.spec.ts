// describe('Hello World Success', () => {
//   console.log('Hello World Success');
//   expect('aaaa').toBe('aaaa');
// });

// describe('Hello World Failed', () => {
//   console.log('Hello World Failed');
//   expect('aaaa').toBe('aaaa');
// });

describe('Hello World', () => {
  it('should hello world success', () => {
    console.log('Hello World Success');
    expect('hello world').toBe('hello world');
  });

  it('should hello world contains', () => {
    console.log('Hello World Failure');
    expect('hello world').toBeInstanceOf('string');
  });
});
