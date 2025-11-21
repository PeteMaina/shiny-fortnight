import React from 'react';
import { Typography, Container, Box, Grid, Card, CardContent, CardHeader, Button } from '@mui/material';
import { Map, GpsFixed, Layers, ZoomIn } from '@mui/icons-material';

const FieldMapping = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Field Mapping
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Visualize and manage your farm fields with detailed mapping tools.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card>
              <CardHeader
                title="Field Overview"
                avatar={<Map />}
              />
              <CardContent>
                <Box sx={{ height: 400, bgcolor: 'grey.100', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Interactive Map Placeholder
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button variant="outlined" startIcon={<ZoomIn />}>
                    Zoom In
                  </Button>
                  <Button variant="outlined" startIcon={<Layers />}>
                    Toggle Layers
                  </Button>
                  <Button variant="outlined" startIcon={<GpsFixed />}>
                    GPS Location
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader
                title="Field Details"
                avatar={<Map />}
              />
              <CardContent>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Total Area:</strong> 250 hectares
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Crops:</strong> Corn, Wheat, Soybeans
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  <strong>Zones:</strong> 5 irrigation zones
                </Typography>
                <Button variant="contained" fullWidth>
                  Edit Field Boundaries
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FieldMapping;
