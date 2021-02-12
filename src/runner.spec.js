const { expect, use } = require('chai');
const { spy } = require('sinon');
const sinonChai = require('sinon-chai');
use(sinonChai);
const { sum, divide } = require('./operations');
const run = require('./runner');

describe('Runner', () => {
  let logSpy;
  let errorSpy;

  before(() => {
    logSpy = spy();
    errorSpy = spy();
  });

  beforeEach(() => {
    logSpy.resetHistory();
    errorSpy.resetHistory();
  });

  it('should log successful cases', () => {
    const cases = [
      {terms: [1,2], operation: sum}
    ];

    run(cases, {log: logSpy});

    expect(logSpy).to.be.calledOnceWith('1 + 2 = 3');
  });

  it('should log error cases', () => {
    const cases = [
      {terms: [2,0], operation: divide}
    ];

    run(cases, {error: errorSpy});

    expect(errorSpy).to.be.calledOnceWith('2 / 0 => Error: You can\'t divide by zero');
  });
});
