// backend/services/crawler.js

async function crawlWebsite(websiteUrl) {
  // whatever logic you already have:
  // axios / fetch
  // cheerio
  // link following

  return [
    {
      url: websiteUrl,
      text: "clean page text here"
    }
  ];
}

module.exports = { crawlWebsite };
