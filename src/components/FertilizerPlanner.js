import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardHeader, Button, TextField } from '@mui/material';
import { Science, Grass as LocalFlorist } from '@mui/icons-material';

const FertilizerPlanner = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Fertilizer Planner
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Plan and schedule fertilizer applications for optimal crop nutrition.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                title="Nitrogen Application"
                avatar={<Science />}
              />
              <CardContent>
                <TextField
                  label="Amount (kg/ha)"
                  type="number"
                  defaultValue={120}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <Button variant="contained">
                  Schedule Application
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                title="Phosphorus & Potassium"
                avatar={<LocalFlorist />}
              />
              <CardContent>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Recommended: P: 80kg/ha, K: 120kg/ha
                </Typography>
                <Button variant="outlined">
                  View Detailed Plan
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FertilizerPlanner;
