import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardHeader, LinearProgress } from '@mui/material';
import { Grass, Science, Opacity } from '@mui/icons-material';

const SoilManagement = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Soil Management
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Monitor soil health, pH levels, and nutrient content.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader
                title="Soil pH Level"
                avatar={<Science />}
              />
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>pH: 6.8</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Optimal range: 6.0 - 7.0
                </Typography>
                <LinearProgress variant="determinate" value={85} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader
                title="Moisture Content"
                avatar={<Opacity />}
              />
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>45%</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Ideal for corn growth
                </Typography>
                <LinearProgress variant="determinate" value={75} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader
                title="Nutrient Levels"
                avatar={<Grass />}
              />
              <CardContent>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Nitrogen: High
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Phosphorus: Medium
                </Typography>
                <Typography variant="body2">
                  Potassium: Low
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SoilManagement;
