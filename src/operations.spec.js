const { expect } = require('chai');
const { sum, subtract, multiply, divide } = require('./operations');

describe('Sum', () => {
  it('should return 0 when nothing is given', () => {
    expect(sum()).to.eq(0);
  });
  it('should return 1 when only 1 is given', () => {
    expect(sum(1)).to.eq(1);
  });
  it('should return 2 when 1 and 1 are given', () => {
    expect(sum(1,1)).to.eq(2);
  });
  it('should parse from string when one number is given', () => {
    expect(sum('1')).to.eq(1);
  });
  it('should parse from string when two numbers are given', () => {
    expect(sum('1', '2')).to.eq(3);
  });
  it('should sum more the two numbers', () => {
    expect(sum(1,2,3,5,8)).to.eq(19);
  });
  it('should sum more the two numbers when one of them is a string', () => {
    expect(sum(1,2,3,5,'8')).to.eq(19);
  });
  it('should sum with negative values', () => {
    expect(sum(1,-2)).to.eq(-1);
  });
});

describe('Subtract', () => {
  it('should return 0 when nothing is given', () => {
    expect(subtract()).to.eq(0);
  });
  it('should return 1 when only 1 is given', () => {
    expect(subtract(1)).to.eq(1);
  });
  it('should return 1 when 2 and 1 are given', () => {
    expect(subtract(2,1)).to.eq(1);
  });
  it('should parse from string when one number is given', () => {
    expect(subtract('1')).to.eq(1);
  });
  it('should parse from string when two numbers are given', () => {
    expect(subtract('2', '1')).to.eq(1);
  });
  it('should subtract more the two numbers', () => {
    expect(subtract(8,5,3,2,1)).to.eq(-3);
  });
  it('should subtract more the two numbers when one of them is a string', () => {
    expect(subtract('8',5,3,2,1)).to.eq(-3);
  });
  it('should subtract with negative values', () => {
    expect(subtract(1,-2)).to.eq(3);
  });
});

describe('Multiply', () => {
  it('should return 0 when nothing is given', () => {
    expect(multiply()).to.eq(0);
  });
  it('should return 1 when only 1 is given', () => {
    expect(multiply(1)).to.eq(1);
  });
  it('should return 2 when 2 and 1 are given', () => {
    expect(multiply(2,1)).to.eq(2);
  });
  it('should parse from string when one number is given', () => {
    expect(multiply('1')).to.eq(1);
  });
  it('should parse from string when two numbers are given', () => {
    expect(multiply('2', '1')).to.eq(2);
  });
  it('should subtract more the two numbers', () => {
    expect(multiply(8,5,3,2,1)).to.eq(240);
  });
  it('should subtract more the two number when one of them is a string', () => {
    expect(multiply('8',5,3,2,1)).to.eq(240);
  });
  it('should subtract with negative values', () => {
    expect(multiply(1,-2)).to.eq(-2);
  });
});

describe('Divide', () => {
  it('should return undefined when nothing is given', () => {
    expect(divide()).to.be.undefined;
  });
  it('should return undefined when 0/0 is given', () => {
    expect(divide(0,0)).to.be.undefined;
  });
  it('should return throw an error when no divisor is provided', () => {
    expect(() => divide(1)).to.throw(/need to provide a divisor/);
  });
  it('should throw an error when trying to divide by 0', () => {
    expect(() => divide(2, 0)).to.throw(/divide by zero/);
  });
  it('should divide two numbers', () => {
    expect(divide(4, 2)).to.eq(2);
  });
  it('should divide two numbers as string', () => {
    expect(divide('4', '2')).to.eq(2);
  });
  it('should divide a negative divisor', () => {
    expect(divide(4, -2)).to.eq(-2);
  });
});


