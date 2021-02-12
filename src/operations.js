const sum = (...terms) => {
  return terms.reduce((total, current) => !isNaN(current) && total + parseFloat(current), 0);
};

const subtract = (...terms) => {
  let minuend = terms[0] ? parseFloat(terms[0]) : 0;
  if(terms.length === 1) return minuend;

  let total = minuend;
  for (let index = 1; index < terms.length; index++) {
    total -= terms[index];
  }

  return total;
};

const multiply = (...factors) => {
  if(!factors.length) return 0;
  return factors.reduce((total, current) => !isNaN(current) && total * parseFloat(current), 1);
};

const divide = (dividend, divisor) => {
  if(!divisor && !dividend) return undefined;
  if(isNaN(divisor)) throw new Error('You need to provide a divisor to this operation.');
  if(divisor === 0) throw new Error('You can\'t divide by zero');
  return (dividend / divisor);
};

sum.symbol = '+';
subtract.symbol = '-';
multiply.symbol = 'x';
divide.symbol = '/';


module.exports = { sum,  subtract, multiply, divide };
