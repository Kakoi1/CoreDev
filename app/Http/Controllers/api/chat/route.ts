// server.js
const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Create an OpenAI API client
const openai = process.env.OPENAI_API_KEY 
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) 
  : null;

// Mock responses for when API key is missing
const mockResponses = [
  "As a COREDEV assistant, I can tell you that we specialize in custom software development, web applications, and enterprise solutions.",
  "COREDEV SOLUTIONS INC. offers a range of services including software development, cloud solutions, and digital transformation consulting.",
  // Add more mock responses here
];

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    // Validate input
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages are required and must be an array" });
    }

    // Check for API key
    if (!process.env.OPENAI_API_KEY || !openai) {
      console.log("OpenAI API key is missing - using mock response");

      // Get the last user message
      const lastUserMessage = [...messages].reverse().find(m => m.role === "user");
      
      // Select a random mock response
      const randomIndex = Math.floor(Math.random() * mockResponses.length);
      const mockResponse = mockResponses[randomIndex];

      return res.json({
        content: `${mockResponse} (Note: This is a mock response because the OpenAI API key is not configured.)`,
        role: "assistant",
        isMockResponse: true
      });
    }

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are COREDEV, a helpful virtual assistant for COREDEV SOLUTIONS INC., a software development company."
        },
        ...messages
      ],
      max_tokens: 500
    });

    res.json({
      content: completion.choices[0].message.content,
      role: "assistant"
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    res.status(500).json({
      error: "Error processing your request",
      message: error.message || "Unknown error occurred",
      content: "I'm sorry, I encountered an error while processing your request. Please try again later.",
      role: "assistant"
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));