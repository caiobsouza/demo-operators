const { expect } = require('chai');
const { sum, multiply, divide } = require('./src/operations');

describe('Validation Cases', () => {
  it('should return 2 when 1 + 1', () => {
    expect(sum(1,1)).to.eq(2);
  });
  it('should return 122991 when -123 + 123123', () => {
    expect(sum(-123,123123)).to.eq(123000);
  });
  it('should return 0 when multiply 8 by 0', () => {
    expect(multiply(8,0)).to.eq(0);
  });
  it('should return 0 when multiply 8 by 0', () => {
    expect(multiply(8,0)).to.eq(0);
  });
  it('should return 15257321499 when multiply 1239123 by 12313', () => {
    expect(multiply(1239123,12313)).to.eq(15257321499);
  });
  it('should return -10.25 when multiply 123 by -12', () => {
    expect(divide(123,-12)).to.eq(-10.25);
  });
  it('should throw an error when try to divide by 0', () => {
    expect(() => divide(313123,0)).to.throw(/divide by zero/);
  });
});

