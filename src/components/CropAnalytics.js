import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardHeader } from '@mui/material';
import { BarChart, TrendingUp, Assessment } from '@mui/icons-material';

const CropAnalytics = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Crop Analytics
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Detailed analytics and insights for your crops.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                title="Yield Trends"
                avatar={<TrendingUp />}
              />
              <CardContent>
                <Typography variant="body2">
                  Analyze historical and predicted yield data.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                title="Performance Metrics"
                avatar={<Assessment />}
              />
              <CardContent>
                <Typography variant="body2">
                  Key performance indicators for crop health.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CropAnalytics;
