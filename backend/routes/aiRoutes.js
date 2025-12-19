const express = require("express");
const router = express.Router();
const OpenAI = require("openai");
const { getEmbeddings } = require("../storage/embeddingsStore");
const { ingestWebsite } = require("../services/ingestWebsite");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/chat", async (req, res) => {
  const { bot_id, message } = req.body;

  // 1️⃣ Validate input
  if (!bot_id || !message) {
    return res.status(400).json({
      error: "bot_id and message are required"
    });
  }

  // 2️⃣ Retrieve stored knowledge
  const embeddings = getEmbeddings(bot_id);

  if (embeddings.length === 0) {
    return res.json({
      reply: "This bot has no knowledge yet. Please ingest a website first."
    });
  }

  // 3️⃣ Build context (simple v1)
  const context = embeddings
    .slice(0, 5)
    .map(e => e.text)
    .join("\n\n");

  try {
    // 4️⃣ Call LLM with context
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a helpful assistant for this business.
          Use ONLY the following context to answer questions:

${context}`
        },
        {
          role: "user",
          content: message
        }
      ],
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });

  } catch (error) {
    console.error("OpenAI error:", error);
    res.status(500).json({ error: "Failed to generate response" });
  }
});

router.post("/ingest", async (req, res) => {
  const { bot_id, website_url } = req.body;

  if (!bot_id || !website_url) {
    return res.status(400).json({
      error: "bot_id and website_url are required"
    });
  }

  try {
    await ingestWebsite(bot_id, website_url);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ingestion failed" });
  }
});


module.exports = router;
