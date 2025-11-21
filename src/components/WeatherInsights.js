import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardHeader } from '@mui/material';
import { Cloud, Thermostat as Thermometer, Opacity, WindPower } from '@mui/icons-material';

const WeatherInsights = () => {
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
                <Typography variant="h5">24°C</Typography>
                <Typography variant="body2" color="text.secondary">
                  Feels like 26°C
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
                <Typography variant="h5">65%</Typography>
                <Typography variant="body2" color="text.secondary">
                  Dew point: 18°C
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
                <Typography variant="h5">12 km/h</Typography>
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
                <Typography variant="h5">0 mm</Typography>
                <Typography variant="body2" color="text.secondary">
                  Next 24h: 2 mm
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WeatherInsights;
