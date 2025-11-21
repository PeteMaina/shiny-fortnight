import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardHeader, LinearProgress } from '@mui/material';
import { Eco, Recycling, Nature } from '@mui/icons-material';

const Sustainability = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Sustainability
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Track and improve your farm's environmental impact and sustainability metrics.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader
                title="Carbon Footprint"
                avatar={<Eco />}
              />
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>Reduced by 15%</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Compared to last year
                </Typography>
                <LinearProgress variant="determinate" value={85} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader
                title="Water Conservation"
                avatar={<Recycling />}
              />
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>Water Saved: 2,500 L</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  This month
                </Typography>
                <LinearProgress variant="determinate" value={78} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader
                title="Biodiversity Index"
                avatar={<Nature />}
              />
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>Score: 8.2/10</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Healthy ecosystem
                </Typography>
                <LinearProgress variant="determinate" value={82} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Sustainability;
