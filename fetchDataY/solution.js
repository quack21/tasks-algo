const { getHashByData, fetchData } = require('./utils');

module.exports = async function (urls, retryCount) {
  var answer = [];
  var validHashes = [];
  var dataArray = [];
  var hashArray = [];

  async function getRes(obj) {
    hashArray.push(obj.hashSum);
    dataArray.push(obj.data);
    await getHashByData(obj.data, callbackFunc).then(() => console.log('sad'));
  }
  function callbackFunc(hash) {
    validHashes.push(hash);
  }

  for (i in urls) {
    let url = urls[i];
    await fetchData(url)
      .then((res) => getRes(res))
      .catch((err) => err);
  }

  return answer;
};
