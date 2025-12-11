import React, { useState, useEffect } from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardHeader, CircularProgress, Alert } from '@mui/material';
import { Cloud, Thermostat as Thermometer, Opacity, WindPower } from '@mui/icons-material';

const WeatherInsights = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        // Use location coordinates if available, otherwise default
        const lat = location?.lat || 40.7128; // Default to NYC
        const lon = location?.lon || -74.0060;

        const response = await fetch(`http://localhost:5000/api/weather?lat=${lat}&lon=${lon}`);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching weather data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [location]);

  if (loading) {
    return (
      <Container maxWidth="xl">
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="xl">
        <Box sx={{ mt: 4 }}>
          <Alert severity="error">
            Failed to load weather data: {error}
          </Alert>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Weather Insights
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Real-time weather data and forecasts for better farming decisions.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Card>
              <CardHeader
                title="Temperature"
                avatar={<Thermometer />}
              />
              <CardContent>
                <Typography variant="h5">{weatherData?.temperature}°C</Typography>
                <Typography variant="body2" color="text.secondary">
                  Feels like {Math.round(weatherData?.temperature + 2)}°C
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardHeader
                title="Humidity"
                avatar={<Opacity />}
              />
              <CardContent>
                <Typography variant="h5">{weatherData?.humidity}%</Typography>
                <Typography variant="body2" color="text.secondary">
                  Dew point: {Math.round(weatherData?.temperature - (100 - weatherData?.humidity) / 5)}°C
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardHeader
                title="Wind Speed"
                avatar={<WindPower />}
              />
              <CardContent>
                <Typography variant="h5">{weatherData?.windSpeed} km/h</Typography>
                <Typography variant="body2" color="text.secondary">
                  Direction: NW
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardHeader
                title="Precipitation"
                avatar={<Cloud />}
              />
              <CardContent>
                <Typography variant="h5">{weatherData?.precipitation} mm</Typography>
                <Typography variant="body2" color="text.secondary">
                  Next 24h: {weatherData?.forecast?.[1]?.precipitation || 0} mm
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Forecast Section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            4-Day Forecast
          </Typography>
          <Grid container spacing={2}>
            {weatherData?.forecast?.map((day, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{day.day}</Typography>
                    <Typography variant="h5">{day.temp}°C</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {day.condition}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Precipitation: {day.precipitation}%
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default WeatherInsights;
