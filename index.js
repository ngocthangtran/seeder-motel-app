const axios = require('axios').default;
const express = require('express');
const { getRandomToken } = require('./utils/post');
const { postMapper } = require('./mappers/postMapper');
const { ohanaPosts } = require('./constants/ohanaPosts');

const app = express();
const PORT = 5555;
const BASE_OHANA_API = 'https://www.ohanaliving.vn/api/web';
const BASE_TROVN_API = 'http://localhost:7777';
const BASE_OHANA_REQ_BODY = {
  matchData: {
    disabled: {
      $ne: true,
    },
  },
  page_number: 10,
  filters: {},
};

const getPosts = async page => {
  console.log('>> Fetch posts on page: Starting');
  const {
    data: { data: posts },
  } = await axios.post(`${BASE_OHANA_API}/rooms/view-all`, {
    ...BASE_OHANA_REQ_BODY,
    page: 1,
  });
  
  console.log('>> Fetch posts on page: Done');
  for (const post of posts) {
    try {
      await postToTroVn(post);
      console.log('posted: ', post.room_name);
    } catch (error) {
      console.log('Res:', error);
    }
    break;
  }
};

const postToTroVn = async post => {
  const formData = postMapper(post);
  return axios.post(`${BASE_TROVN_API}/posts`, formData, {
    headers: {
      ...formData.getHeaders(),
      'x-auth-token': getRandomToken(),
    },
  });
};

const main = async () => {
  // getPosts()
  for (var i = 0; i < ohanaPosts.length; i++) {
      await postToTroVn(ohanaPosts[i]);
      console.log('>> Posted:', ohanaPosts[i].room_name);
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(i);
      if (i === 500) break;
  }
  console.log('DONE');
};

app.listen(PORT, () => {
  console.log('app listening on port', PORT);
  main();
});
