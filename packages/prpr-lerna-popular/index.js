const { API } = require('prpr-lerna-core');
const axios = require('axios');

const getPopularImg = () => axios.get(API)

module.exports = getPopularImg;

getPopularImg().then((res) => console.log(res.data.length));
