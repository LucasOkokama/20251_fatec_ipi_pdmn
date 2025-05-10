require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
var cors = require('cors');

const PORT = 3000;

const pexelsClient = axios.create({
  baseURL: 'https://api.pexels.com/v1/',
  headers: {
    Authorization: process.env.PEXELS_KEY,
  },
});

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);

app.get('/search', async (req, res) => {
  const { query } = req.query;

  try {
    const result = await pexelsClient.get('/search', {
      params: {
        query,
        per_page: 20,
      },
    });
    return res.json(result.data);
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao buscar imagens' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${3000}`);
});
