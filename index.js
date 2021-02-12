const { sum, multiply, divide } = require('./src/operations');

const fixture = [
  { terms: [1, 1], operation: sum },
  { terms: [-123, 123123], operation: sum },
  { terms: [8, 0], operation: multiply },
  { terms: [1239123, 12313], operation: multiply },
  { terms: [123, -12], operation: divide },
  { terms: [313123], operation: divide }
];


run(fixture, console);

module.exports = run;