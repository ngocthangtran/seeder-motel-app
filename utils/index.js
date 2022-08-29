const { userTokens } = require('../constants/userTokens');

const randomInRange = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const getRandomToken = () => {
  const max = userTokens.length - 1;
  const tokenIndex = randomInRange(0, max);
  return userTokens[tokenIndex];
};

const getRandomUnique = (min, max, limit) => {
  if (limit > max - min + 1) return [];

  const result = [];
  while (result.length < limit) {
    const number = randomInRange(min, max);
    if (!result.includes(number)) result.push(number);
  }
  return result;
};

module.exports = {
  randomInRange,
  getRandomUnique,
  getRandomToken,
};
