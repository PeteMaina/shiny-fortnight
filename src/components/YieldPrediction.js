import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardHeader, LinearProgress } from '@mui/material';
import { TrendingUp, Assessment } from '@mui/icons-material';

const YieldPrediction = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Yield Prediction
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Predictive analytics for crop yields and harvest planning.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                title="Corn Yield Forecast"
                avatar={<TrendingUp />}
              />
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>Expected: 2,850 tons</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  +12% increase from last season
                </Typography>
                <LinearProgress variant="determinate" value={85} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                title="Wheat Yield Forecast"
                avatar={<Assessment />}
              />
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>Expected: 1,950 tons</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  +8% increase from last season
                </Typography>
                <LinearProgress variant="determinate" value={78} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default YieldPrediction;
