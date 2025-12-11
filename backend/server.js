const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock weather data for now - replace with actual WeatherNext2 API when available
const mockWeatherData = {
  temperature: 24,
  humidity: 65,
  windSpeed: 12,
  precipitation: 0,
  forecast: [
    { day: 'Today', temp: 24, condition: 'Sunny', precipitation: 0 },
    { day: 'Tomorrow', temp: 22, condition: 'Cloudy', precipitation: 20 },
    { day: 'Wednesday', temp: 26, condition: 'Rainy', precipitation: 80 },
    { day: 'Thursday', temp: 28, condition: 'Sunny', precipitation: 10 }
  ]
};

// Weather API endpoint
app.get('/api/weather', async (req, res) => {
  try {
    const { lat, lon } = req.query;

    // TODO: Replace with actual WeatherNext2 API call
    // const response = await axios.get(`https://weather-api.example.com/data?lat=${lat}&lon=${lon}`);
    // res.json(response.data);

    // For now, return mock data
    res.json(mockWeatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
