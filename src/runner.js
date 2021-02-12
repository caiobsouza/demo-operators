module.exports = (cases, logger) => {
  cases.map((element) => {
    const { operation, terms } = element;
    try {
      const result = operation(...terms);
      logger.log(`${terms.join(` ${operation.symbol} `)} = ${result}`);
    } catch (error) {
      logger.error(`${terms.join(` ${operation.symbol} `)} => Error: ${error.message}`);
    }
  });
};
