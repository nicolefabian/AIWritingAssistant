const express = require('express');
const axios = require('axios');
const analyzeRouter = express.Router();

analyzeRouter.post('/', async (req, res) => {
    const { sentence } = req.body;
    //making the http request
    try {
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-4o-mini",
            messages: [
              {
                role: "system",
                content:
                  "You are a helpful assistant that rephrases sentences. Only return the rephrased sentences without any additional comments or context.",
              },
              {
                role: "user",
                content: `${sentence}`,
              },
            ],
            max_tokens: 150, // maximum number of tokens to generate, the higher token means higher response
            n: 3,
            stop: null,
            temperature: 0.7,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
          }
        );
    
        const rephrasedSentences = response.data.choices.map((choice) =>
          choice.message.content.trim()
        );
    
        res.json({ rephrasedSentences });
      } catch (error) {
        console.error("Error processing sentence:", error);
        res.status(500).json({ error: "Error processing sentence" });
      }
    });