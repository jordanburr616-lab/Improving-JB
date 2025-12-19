/*Temporary placement instead of a full database*/

const store = {};

function saveEmbedding(botId, chunk) {
  if (!store[botId]) {
    store[botId] = [];
  }
  store[botId].push(chunk);
}

function getEmbeddings(botId) {
  return store[botId] || [];
}

module.exports = {
  saveEmbedding,
  getEmbeddings
};