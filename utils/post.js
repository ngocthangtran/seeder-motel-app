const { randomInRange, getRandomUnique } = require('.');
const { utilities } = require('../constants/utilities');
const { roomTypes } = require('../constants/roomTypes');
const { userTokens } = require('../constants/userTokens');

const getRandomToken = () => {
  const max = userTokens.length - 1;
  const tokenIndex = randomInRange(0, max);
  return userTokens[tokenIndex];
};

const getRandomUtilities = () => {
  const max = utilities.length - 1;
  const numberUtils = randomInRange(0, max);
  const utilsIndexes = getRandomUnique(0, max, numberUtils);

  return utilsIndexes.map(i => {
    return utilities[i].utilityId;
  });
};

const getRandomRoomType = () => {
  const max = roomTypes.length - 1;
  const index = randomInRange(0, max);
  return roomTypes[index].roomTypeId;
};

module.exports = { getRandomToken, getRandomUtilities, getRandomRoomType };
