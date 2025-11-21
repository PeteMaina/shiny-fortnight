import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardHeader, Button } from '@mui/material';
import { BugReport, Warning, CheckCircle } from '@mui/icons-material';

const PestControl = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Pest Control
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Monitor and manage pest threats to your crops.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                title="Pest Detection"
                avatar={<BugReport />}
              />
              <CardContent>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Aphids detected in tomato field.
                </Typography>
                <Button variant="contained" color="warning">
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                title="Prevention Measures"
                avatar={<CheckCircle />}
              />
              <CardContent>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Implement companion planting for natural pest control.
                </Typography>
                <Button variant="outlined">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PestControl;
