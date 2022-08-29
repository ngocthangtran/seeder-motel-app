const FormData = require('form-data');
const request = require('request');
const { getRandomUtilities, getRandomRoomType } = require('../utils/post');

const postMapper = ohanaPost => {
  const utils = getRandomUtilities();
  const images = ohanaPost.upload_room_images.slice(0, 10);
  console.log(ohanaPost.deposit)
  const data = new FormData();
  try {
    data.append('title', ohanaPost.room_name);
    data.append('postType', ohanaPost.room_is_shared ? 'FOR_SHARE' : 'FOR_RENT');
    data.append('area', ohanaPost.room_area);
    data.append('price', ohanaPost.room_price);
    data.append('deposit', ohanaPost.deposit ? ohanaPost.deposit : 0);
    data.append('waterCost', ohanaPost.water_price ? ohanaPost.water_price : 6000);
    data.append('electricityCost', ohanaPost.electric_price);
    data.append('description', ohanaPost.notes);
    data.append('address', ohanaPost.exact_room_address);
    data.append('wardId', ohanaPost.full_address_object.ward.code);
    data.append('roomTypeId', getRandomRoomType());
    data.append('phone', ohanaPost.phone_number);
    utils.forEach(u => {
      data.append('utilityIds', u);
    });
    images.forEach((i, index) => {
      console.log(i);
      data.append('images', request(i));
    });
  } catch (error) {
    console.log
      (error)
  }
  return data;
};

module.exports = { postMapper };
