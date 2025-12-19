/*Take a website URL and produce stored knowledge for a bot.*/

const { crawlWebsite } = require("../services/crawler");
const { chunkPages } = require("../services/chunker");
const { createEmbedding } = require("../services/embeddings");
const { saveEmbedding } = require("../storage/embeddingsStore");

async function ingestWebsite(botId, websiteUrl) {
  const pages = await crawlWebsite(websiteUrl);
  const chunks = chunkPages(pages);

  for (const chunk of chunks) {
    const embedding = await createEmbedding(chunk.text);

    saveEmbedding(botId, {
      text: chunk.text,
      embedding,
      metadata: chunk.metadata
    });
  }

  console.log(`Ingested ${chunks.length} chunks for ${botId}`);
}

module.exports = { ingestWebsite };